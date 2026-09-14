"""
Parametric selective pallet racking for the MONOLITH catalogue-coverage case.

One script builds the whole size range: the SKU table is the source of truth,
geometry is derived from it. Camera and light are set once for the largest SKU
and never touched, so the series stays comparable and the size difference in
frame is real.

Run:  blender --background --python rack_gen.py -- --sku R-4500-2700-4 --out /tmp/out.png
      blender --background --python rack_gen.py -- --all --outdir /tmp/rack
"""

import bpy, bmesh, math, sys, os, argparse, contextlib
from mathutils import Vector

# ---------------------------------------------------------------- SKU table
# height_m, beam_m, levels  — real selective-racking steps
HEIGHTS = [2.0, 3.0, 4.5, 6.0]
BEAMS   = [1.8, 2.7, 3.6]
LEVELS  = [3, 4, 5]

def sku_table():
    """20 positions: every height gets several bay/level combinations."""
    combos = [
        (2.0, 1.8, 3), (2.0, 2.7, 3), (2.0, 3.6, 3), (2.0, 2.7, 4), (2.0, 1.8, 4),
        (3.0, 1.8, 3), (3.0, 2.7, 4), (3.0, 3.6, 4), (3.0, 2.7, 5), (3.0, 3.6, 3),
        (4.5, 1.8, 4), (4.5, 2.7, 4), (4.5, 3.6, 5), (4.5, 2.7, 5), (4.5, 3.6, 4),
        (6.0, 1.8, 5), (6.0, 2.7, 5), (6.0, 3.6, 5), (6.0, 3.6, 4), (6.0, 2.7, 4),
    ]
    out = []
    for h, b, lv in combos:
        out.append({
            "id": f"R-{int(h*1000)}-{int(b*1000)}-{lv}",
            "height": h, "beam": b, "levels": lv,
            "depth": 1.1,
            "load_kg": {1.8: 2000, 2.7: 1800, 3.6: 1500}[b] * lv,
        })
    return out

# ---------------------------------------------------------------- constants
POST_W, POST_D = 0.09, 0.07      # upright profile 90 x 70 mm
SLOT_PITCH     = 0.05            # perforation step 50 mm
SLOT_W, SLOT_H = 0.014, 0.032
BRACE          = 0.04            # bracing tube 40 mm
BEAM_H, BEAM_D = 0.10, 0.05      # load beam 100 x 50 mm
FOOT           = (0.16, 0.13, 0.012)

COL_UPRIGHT = (0.62, 0.075, 0.012, 1.0)  # industrial orange, matches the site accent
COL_BEAM    = (0.055, 0.060, 0.070, 1.0) # graphite
COL_FOOT    = (0.28, 0.29, 0.31, 1.0)

# the camera is framed for the largest position and reused for every SKU,
# so the size difference between SKUs stays real in frame
MAX_H, MAX_B, MAX_D = max(HEIGHTS), max(BEAMS), 1.1


# ---------------------------------------------------------------- utilities
def clear_scene():
    bpy.ops.wm.read_factory_settings(use_empty=True)


def box(name, size, loc, coll=None):
    """Box mesh built with bmesh — no ops, so it is safe in background mode."""
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    bmesh.ops.scale(bm, vec=Vector(size), verts=bm.verts)
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    ob.location = loc
    (coll or bpy.context.scene.collection).objects.link(ob)
    return ob


def op_ctx():
    """Context override for object-editor ops (join, modifier_apply, ...).

    --background has no window and these ops work there with plain bpy.context.
    An interactive session at startup has a window but no VIEW_3D context yet,
    which fails the operator's poll() — override it whenever a window exists.
    """
    wm = bpy.context.window_manager
    if not wm.windows:
        return contextlib.nullcontext()
    win = wm.windows[0]
    area = next((a for a in win.screen.areas if a.type == 'VIEW_3D'), win.screen.areas[0])
    region = next(r for r in area.regions if r.type == 'WINDOW')
    return bpy.context.temp_override(window=win, area=area, region=region)


def join(objs, name):
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]

    with op_ctx():
        bpy.ops.object.join()

    # bpy.context.active_object can be unresolved this early in an interactive
    # startup script; view_layer.objects.active is the same object and safe.
    ob = bpy.context.view_layer.objects.active
    ob.name = name
    return ob


def material(name, rgba, rough=0.45, metal=0.0):
    m = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    m.use_nodes = True
    p = m.node_tree.nodes.get("Principled BSDF")
    p.inputs["Base Color"].default_value = rgba
    p.inputs["Roughness"].default_value = rough
    p.inputs["Metallic"].default_value = metal
    return m


def assign(ob, mat):
    ob.data.materials.clear()
    ob.data.materials.append(mat)


def boolean_cut(target, cutter):
    """One boolean per post: all slots are joined into a single cutter mesh."""
    mod = target.modifiers.new("slots", 'BOOLEAN')
    mod.object = cutter
    mod.operation = 'DIFFERENCE'
    mod.solver = 'FLOAT'   # 5.x enum: FLOAT / EXACT / MANIFOLD
    bpy.context.view_layer.objects.active = target
    with op_ctx():
        bpy.ops.object.modifier_apply(modifier="slots")
    bpy.data.objects.remove(cutter, do_unlink=True)


# ---------------------------------------------------------------- geometry
def make_post(height, x, y):
    """Upright with real perforation: slots are cut, not painted."""
    post = box("post", (POST_W, POST_D, height), (x, y, height / 2))

    cutters = []
    n = int((height - 0.25) / SLOT_PITCH)
    for i in range(n):
        z = 0.12 + i * SLOT_PITCH
        cutters.append(box("slot", (POST_W * 1.4, SLOT_W, SLOT_H), (x, y, z)))
    if cutters:
        cutter = join(cutters, "slots_cutter")
        boolean_cut(post, cutter)
    return post


def make_frame(height, depth, x0):
    """Two uprights + horizontal and diagonal bracing + footplates."""
    parts = []
    ys = (-depth / 2 + POST_D / 2, depth / 2 - POST_D / 2)
    for y in ys:
        parts.append(make_post(height, x0, y))
        parts.append(box("foot", FOOT, (x0, y, FOOT[2] / 2)))

    # bracing: horizontals every ~1 m, diagonals between them
    span = depth - POST_D
    n_h = max(2, int(height / 1.0))
    zs = [0.35 + i * (height - 0.6) / (n_h - 1) for i in range(n_h)]
    for z in zs:
        parts.append(box("brace_h", (BRACE, span, BRACE), (x0, 0, z)))
    for i in range(len(zs) - 1):
        z0, z1 = zs[i], zs[i + 1]
        length = math.hypot(span, z1 - z0)
        d = box("brace_d", (BRACE, length, BRACE), (x0, 0, (z0 + z1) / 2))
        d.rotation_euler = (math.atan2(z1 - z0, span) * (1 if i % 2 == 0 else -1), 0, 0)
        parts.append(d)
    return parts


def make_beams(beam_len, height, depth, levels, x_left, x_right):
    """Load beams on both faces, spread over the usable height."""
    parts = []
    usable = height - 0.35
    step = usable / levels
    for i in range(1, levels + 1):
        z = 0.25 + step * (i - 1) + step * 0.6
        if z > height - 0.2:
            continue
        for y in (-depth / 2 + BEAM_D, depth / 2 - BEAM_D):
            parts.append(box("beam", (beam_len, BEAM_D, BEAM_H),
                             ((x_left + x_right) / 2, y, z)))
            # end connectors: without them the beams read as floating
            for x in (x_left + POST_W / 2, x_right - POST_W / 2):
                parts.append(box("beam", (0.02, BEAM_D * 1.5, BEAM_H * 1.6), (x, y, z)))
    return parts


def build_rack(sku, x_offset=0.0):
    h, b, lv, d = sku["height"], sku["beam"], sku["levels"], sku["depth"]
    x_left, x_right = -b / 2 - POST_W / 2, b / 2 + POST_W / 2

    frame_parts = make_frame(h, d, x_left) + make_frame(h, d, x_right)
    beam_parts = make_beams(b, h, d, lv, x_left, x_right)

    uprights = [o for o in frame_parts if o.name.startswith(("post", "brace"))]
    feet = [o for o in frame_parts if o.name.startswith("foot")]

    up = join(uprights, "uprights"); assign(up, material("m_upright", COL_UPRIGHT, 0.42))
    ft = join(feet, "feet");         assign(ft, material("m_foot", COL_FOOT, 0.5, 0.6))
    bm_ = join(beam_parts, "beams"); assign(bm_, material("m_beam", COL_BEAM, 0.38, 0.4))
    out = [up, ft, bm_]
    if x_offset:
        for o in out:
            o.location.x += x_offset
    return out


# ---------------------------------------------------------------- studio
def setup_studio(lens=42.0, azimuth=34.0, elevation=9.0, margin=1.18,
                 subject_h=None, subject_w=None):
    """Set once for the largest SKU and never touched between positions.

    subject_h / subject_w override the framing for the line-up shot, which is a
    different shot type — the series itself always uses the defaults.
    """
    floor = box("floor", (80, 80, 0.02), (0, 0, -0.01))
    assign(floor, material("m_floor", (0.90, 0.895, 0.885, 1.0), 0.58))
    backdrop = box("backdrop", (220, 0.1, 90), (0, 22, 45))
    assign(backdrop, material("m_backdrop", (0.93, 0.925, 0.915, 1.0), 0.75))

    world = bpy.data.worlds.new("w")
    bpy.context.scene.world = world
    world.use_nodes = True
    world.node_tree.nodes["Background"].inputs[0].default_value = (1.0, 0.99, 0.98, 1.0)
    world.node_tree.nodes["Background"].inputs[1].default_value = 0.42

    def area(name, loc, rot, size, energy):
        d = bpy.data.lights.new(name, type='AREA')
        d.size, d.energy = size, energy
        o = bpy.data.objects.new(name, d)
        o.location, o.rotation_euler = loc, rot
        bpy.context.scene.collection.objects.link(o)
        return o

    area("key",  (-7.0, -9.0, 9.0), (math.radians(50), 0, math.radians(-38)), 9.0, 5200)
    area("fill", ( 9.0, -7.0, 4.5), (math.radians(70), 0, math.radians(52)),  10.0, 1900)
    area("rim",  ( 1.5, 10.0, 7.5), (math.radians(-58), 0, math.radians(10)), 8.0, 2400)

    # --- camera distance derived from the frustum, not guessed ---
    subject_h = subject_h if subject_h else MAX_H + 0.5      # tallest frame + headroom
    subject_w = subject_w if subject_w else MAX_B + MAX_D + 0.6  # bay + depth at an angle
    sensor_w = 36.0
    sensor_h = sensor_w * 9.0 / 16.0
    half_v = math.atan(sensor_h / (2 * lens))
    half_h = math.atan(sensor_w / (2 * lens))
    dist = max((subject_h / 2) / math.tan(half_v),
               (subject_w / 2) / math.tan(half_h)) * margin

    az, el = math.radians(azimuth), math.radians(elevation)
    centre = Vector((0.0, 0.0, subject_h / 2 - 0.35))
    cam_d = bpy.data.cameras.new("cam")
    cam_d.lens = lens
    cam = bpy.data.objects.new("cam", cam_d)
    cam.location = centre + Vector((math.sin(az) * math.cos(el),
                                    -math.cos(az) * math.cos(el),
                                    math.sin(el))) * dist
    bpy.context.scene.collection.objects.link(cam)

    target = bpy.data.objects.new("cam_target", None)
    target.location = centre
    bpy.context.scene.collection.objects.link(target)
    con = cam.constraints.new('TRACK_TO')
    con.target = target
    con.track_axis, con.up_axis = 'TRACK_NEGATIVE_Z', 'UP_Y'

    bpy.context.scene.camera = cam
    return cam


def setup_render(res_x=1600, res_y=900, samples=96):
    sc = bpy.context.scene
    sc.render.engine = 'CYCLES'
    sc.cycles.device = 'GPU'
    try:
        prefs = bpy.context.preferences.addons['cycles'].preferences
        prefs.compute_device_type = 'METAL'
        prefs.get_devices()
        for dev in prefs.devices:
            dev.use = True
    except Exception as e:
        print("gpu note:", e)
    sc.cycles.samples = samples
    sc.cycles.use_denoising = True
    sc.render.resolution_x, sc.render.resolution_y = res_x, res_y
    sc.render.film_transparent = False
    # AgX greys down a white sweep and desaturates powder-coat orange;
    # catalogue-on-white wants the neutral transform
    sc.view_settings.view_transform = 'Standard'
    return sc


# ---------------------------------------------------------------- driver
def render_sku(sku, path, samples=96):
    clear_scene()
    setup_render(samples=samples)
    setup_studio()
    build_rack(sku)
    bpy.context.scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    print(f"RENDERED {sku['id']} -> {path}")


def render_summary(path, samples=96):
    """The whole range in one line — this is the card image.

    A single SKU at series scale is a dot in a 284 px card; the line-up fills
    the frame and states the point of the case in one look.
    """
    picks = ["R-2000-1800-3", "R-3000-2700-4", "R-4500-2700-5", "R-6000-3600-5"]
    table = {s["id"]: s for s in sku_table()}
    skus = [table[p] for p in picks]

    gap = 0.55
    widths = [s["beam"] + POST_W for s in skus]
    total = sum(widths) + gap * (len(skus) - 1)

    clear_scene()
    setup_render(samples=samples)
    setup_studio(lens=50.0, azimuth=26.0, elevation=7.0, margin=1.10,
                 subject_h=MAX_H + 0.4, subject_w=total + MAX_D)

    x = -total / 2
    for s, w in zip(skus, widths):
        build_rack(s, x_offset=x + w / 2)
        x += w + gap

    bpy.context.scene.render.filepath = path
    bpy.ops.render.render(write_still=True)
    print(f"RENDERED summary -> {path}")


def main():
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    ap = argparse.ArgumentParser()
    ap.add_argument("--sku")
    ap.add_argument("--out", default="/tmp/rack.png")
    ap.add_argument("--outdir", default="/tmp/rack")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--summary", action="store_true")
    ap.add_argument("--samples", type=int, default=96)
    a = ap.parse_args(argv)

    table = sku_table()
    if a.summary:
        render_summary(a.out, a.samples)
    elif a.all:
        os.makedirs(a.outdir, exist_ok=True)
        for i, sku in enumerate(table, 1):
            render_sku(sku, os.path.join(a.outdir, f"{i:02d}-{sku['id']}.png"), a.samples)
    else:
        sku = next((s for s in table if s["id"] == a.sku), table[-1])
        render_sku(sku, a.out, a.samples)


if __name__ == "__main__":
    main()
