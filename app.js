/* ============================================================
   MONOLITH.AI — app.js
   Single-canvas engine: one WebGL scene lives across all pages.
   Routing swaps DOM content, camera state and geometry weights.
   ============================================================ */
(function () {
  'use strict';

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => [...(c || document).querySelectorAll(s)];

  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const FINE    = window.matchMedia('(pointer: fine)').matches;
  const MOBILE  = window.innerWidth < 768;

  const state = {
    lang:    localStorage.getItem('m_lang') || 'ru',
    palette: parseInt(localStorage.getItem('m_palette') || '3', 10),
    route:   'main',
    transitioning: false
  };

  const PAGES = ['main', 'lab', 'capabilities', 'brief'];
  const PAGE_INDEX = { main: '01', lab: '02', capabilities: '03', brief: '04' };

  if (MOBILE) document.body.classList.add('lite-gl');

  /* shared so goTo() works with or without the scene */
  const w  = { normal: 1, wireframe: 0, metric: 0, exploded: 0 };
  const fx = { converge: 0, pulse: 0 };
  const STATE_WEIGHTS = {
    main:         { normal: 1,    wireframe: 0, metric: 0, exploded: 0 },
    lab:          { normal: 0.55, wireframe: 0.45, metric: 0, exploded: 0 },
    capabilities: { normal: 0,    wireframe: 0, metric: 1, exploded: 0 },
    brief:        { normal: 0.65, wireframe: 0, metric: 0, exploded: 0.35 }
  };
  const FIELD_X = { main: 7, lab: 0, capabilities: 0, brief: 3 };
  const FIELD_Y = { main: 2, lab: 0, capabilities: 0, brief: 0 };   // lifts the field in frame on the home page
  const camPos  = { x: 0, y: 15, z: 36 };
  const camLook = { x: 0, y: 2, z: 0 };
  const camFov  = { fov: 45 };
  let fieldGroup = { position: { x: FIELD_X.main, y: 0, z: 0 }, rotation: { x: 0, y: 0, z: 0 } };

  let tweenCamera = function () {};
  let buildHeroRecede = function () {};
  let tweenWeights = function (target) { Object.assign(w, target || {}); };
  let pulse = function () {};
  let setHistogram = function () {};
  let startLoop = function () {};
  let stopLoop = function () {};
  let freezeField = function () {};
  let setFogBoost = function () {};
  let staticFrame = function () {};
  let fogResize = function () {};
  let makeFogSprite = function () {};

  /* ==========================================================
     1. WEBGL ENGINE — field of columns (InstancedMesh)
     ========================================================== */
  const COLS = MOBILE ? 16 : 40;
  const ROWS = MOBILE ? 11 : 26;
  const GAP  = MOBILE ? 1.35 : 1.18;
  const COUNT = COLS * ROWS;

  if (typeof THREE !== 'undefined') {
  const canvas   = $('#gl');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !MOBILE, alpha: true });
  renderer.setPixelRatio(MOBILE ? 1 : Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene  = new THREE.Scene();
  scene.fog    = new THREE.Fog(0xffffff, 40, 110);
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 300);

  const ambLight = new THREE.AmbientLight(0xffffff, 0.75);
  const dirLight = new THREE.DirectionalLight(0xf3f7ff, 0.9);
  dirLight.position.set(14, 30, 18);
  const pulseLightSrc = new THREE.PointLight(0xffffff, 0, 60);
  pulseLightSrc.position.set(0, 12, 6);
  scene.add(ambLight, dirLight, pulseLightSrc);

  const boxGeo  = new THREE.BoxGeometry(0.62, 1, 0.62);
  const colMat  = new THREE.MeshLambertMaterial({ color: 0xdfe3e9 });
  const wireMat = new THREE.MeshBasicMaterial({ color: 0x2563eb, wireframe: true, transparent: true, opacity: 0 });

  const mesh = new THREE.InstancedMesh(boxGeo, colMat, COUNT);
  const wire = new THREE.InstancedMesh(boxGeo, wireMat, COUNT);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  wire.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  fieldGroup = new THREE.Group();
  fieldGroup.add(mesh, wire);
  scene.add(fieldGroup);

  const c0 = new THREE.Color();
  for (let i = 0; i < COUNT; i++) {
    const v = 0.8 + Math.random() * 0.2;
    mesh.setColorAt(i, c0.setRGB(v, v, v));
  }
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;

  const exDir = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    const a = Math.random() * Math.PI * 2;
    exDir[i * 3]     = Math.cos(a) * (0.6 + Math.random() * 1.6);
    exDir[i * 3 + 1] = Math.random() * 1.8;
    exDir[i * 3 + 2] = Math.sin(a) * (0.6 + Math.random() * 1.6);
  }

  const histTarget  = new Float32Array(COLS);
  const histCurrent = new Float32Array(COLS);
  setHistogram = function (nums) {
    if (!nums || !nums.length) nums = [3, 8, 5, 12, 7, 4, 10];
    const max = Math.max(...nums);
    for (let c = 0; c < COLS; c++) {
      const n = nums[c % nums.length] / max;
      histTarget[c] = 0.15 + Math.round(n * 6) / 6 * 0.85;
    }
  };
  setHistogram(null);

  const mouse = { x: 0, y: 0, lx: 0, ly: 0 };
  const scroll = { y: window.scrollY, ly: window.scrollY };
  window.addEventListener('scroll', () => { scroll.y = window.scrollY; }, { passive: true });
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    $('#stCur').textContent = 'CUR ' + (e.clientX / window.innerWidth).toFixed(3) + ' / ' + (e.clientY / window.innerHeight).toFixed(3);
    if (FINE) cursorMove(e.clientX, e.clientY);
  });

  const CAMERA_STATES = {
    main:         { pos: { x: 0,   y: 15,  z: 36 }, look: { x: 0, y: 2, z: 0 },  fov: 45 },
    lab:          { pos: { x: 3.2, y: 4.3, z: 10.5 }, look: { x: -4, y: 1.6, z: -7 }, fov: 55 },
    capabilities: { pos: { x: 0,   y: 48,  z: 12 }, look: { x: 0, y: 0, z: 0 },  fov: 20 },
    brief:        { pos: { x: -14, y: 3.5, z: 23 }, look: { x: 0, y: 5, z: -4 }, fov: 60 }
  };
  /* recede target: pushes the column field far into the distance once the
     reader scrolls past the hero, so it stops competing with body text.
     A wide fov keeps the extra distance reading as "smaller", not "zoomed". */
  const HERO_FAR = { pos: { x: 0, y: 70, z: 220 }, fov: 55 };
  /* ...but the desktop home page keeps its field. There the scroll only backs
     the camera off along its own sight line until the columns read about a
     third smaller — same angle, same colour — and they go on living there. */
  const HERO_MAIN_BACK = 1.5;   // × distance to the look point ⇒ ~1/3 smaller on screen
  const backOff = (cs, k) => ({
    x: cs.look.x + (cs.pos.x - cs.look.x) * k,
    y: cs.look.y + (cs.pos.y - cs.look.y) * k,
    z: cs.look.z + (cs.pos.z - cs.look.z) * k
  });

  Object.assign(camPos, CAMERA_STATES.main.pos);
  Object.assign(camLook, CAMERA_STATES.main.look);
  camFov.fov = CAMERA_STATES.main.fov;
  const lookVec = new THREE.Vector3();

  tweenCamera = function (route, instant) {
    const cs = CAMERA_STATES[route];
    if (instant || REDUCED) {
      Object.assign(camPos, cs.pos); Object.assign(camLook, cs.look); camFov.fov = cs.fov;
      return;
    }
    const opts = { duration: 1.4, ease: 'power3.inOut', overwrite: 'auto' };
    gsap.to(camPos,  { ...cs.pos,  ...opts });
    gsap.to(camLook, { ...cs.look, ...opts });
    gsap.to(camFov,  { fov: cs.fov, ...opts });
  };

  let heroRecedeTl = null;
  let freezeCall = null;
  buildHeroRecede = function (route) {
    if (heroRecedeTl) heroRecedeTl.kill();
    const near = CAMERA_STATES[route];
    // the desktop home page is the one place the field stays on screen
    const keepField = !MOBILE && route === 'main';
    const far = keepField ? { pos: backOff(near, HERO_MAIN_BACK), fov: near.fov } : HERO_FAR;
    heroRecedeTl = gsap.timeline({
      scrollTrigger: {
        trigger: '#page-' + route,
        // hold the field in frame for the first third of a screen, then drift
        start: () => 'top top-=' + Math.round(window.innerHeight * 0.35),
        end: () => '+=' + Math.round(window.innerHeight * 1.05),
        scrub: 1,
        // freeze only after the scrub has settled, so a fast flick down
        // doesn't strand the field mid-flight. A field that stays on screen
        // must never be frozen — it would stop dead in front of the reader.
        onLeave:     () => { if (!keepField) freezeCall = gsap.delayedCall(1.4, () => { fieldFrozen = true; }); },
        onEnterBack: () => { if (freezeCall) freezeCall.kill(); startLoop(); }
      }
    })
      .to(camPos, { ...far.pos, ease: 'none' }, 0)
      .to(camFov, { fov: far.fov, ease: 'none' }, 0);
    // fading and sliding the canvas is only for the routes that clear it out;
    // on the home page the columns keep their colour exactly as they are
    if (!keepField) heroRecedeTl.to('#gl', { xPercent: -35, opacity: 0, ease: 'power1.in' }, 0);
  };

  tweenWeights = function (target, dur) {
    if (REDUCED) { Object.assign(w, target); return; }
    gsap.to(w, { ...target, duration: dur || 1.4, ease: 'power3.inOut', overwrite: 'auto' });
  };

  pulse = function () {
    if (REDUCED) return;
    gsap.fromTo(pulseLightSrc, { intensity: 2.2 }, { intensity: 0, duration: 1.1, ease: 'power2.out', overwrite: 'auto' });
  };

  /* per-frame update */
  const dummy = new THREE.Object3D();
  let simT = 0, lastT = performance.now();
  let frames = 0, fpsLast = performance.now();
  let rafId = null;
  let fieldFrozen = false;   // field receded out of view: skip its work, keep the fog alive

  function updateField(dt) {
    simT += dt * (1 - 0.78 * w.wireframe);                    // wireframe "freezes" the waves
    const st = simT + scroll.ly * 0.0035;                     // scroll shifts the wave phase
    for (let c = 0; c < COLS; c++) {
      histCurrent[c] += (histTarget[c] - histCurrent[c]) * Math.min(1, dt * 4);
    }
    const keep = 1 - fx.converge * 0.92;
    let i = 0;
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++, i++) {
        const x0 = (c - COLS / 2 + 0.5) * GAP;
        const z0 = (r - ROWS / 2 + 0.5) * GAP;

        const hWave = 1.7 + (Math.sin(x0 * 0.35 + st) +
                             Math.sin(z0 * 0.28 + st * 0.8) +
                             Math.sin((x0 + z0) * 0.18 + st * 0.5)) * 0.85;
        const hMetric = 0.35 + histCurrent[c] * 7.2;
        let h = (w.normal + w.wireframe) * hWave + w.metric * hMetric + 0.25;
        if (h < 0.2) h = 0.2;

        const ex = w.exploded;
        const px = (x0 + exDir[i * 3] * ex) * keep;
        const py = h / 2 + exDir[i * 3 + 1] * ex;
        const pz = (z0 + exDir[i * 3 + 2] * ex) * keep;

        dummy.position.set(px, py, pz);
        dummy.scale.set(1, h, 1);
        dummy.rotation.set(0, 0, 0);
        dummy.updateMatrix();
        mesh.setMatrixAt(i, dummy.matrix);
        if (!MOBILE || w.wireframe > 0.01) wire.setMatrixAt(i, dummy.matrix);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (!MOBILE || w.wireframe > 0.01) wire.instanceMatrix.needsUpdate = true;
    wireMat.opacity = w.wireframe * 0.7;
  }

  function renderFrame() {
    mouse.lx += (mouse.x - mouse.lx) * 0.04;                  // inertia lerp 0.04
    mouse.ly += (mouse.y - mouse.ly) * 0.04;
    scroll.ly += (scroll.y - scroll.ly) * 0.06;
    const sf = scroll.ly / Math.max(1, window.innerHeight);   // pages scrolled

    // mouse tilts the whole field in 3D, scroll slowly rotates and sinks it
    fieldGroup.rotation.y = mouse.lx * 0.14 + sf * 0.22;
    fieldGroup.rotation.x = mouse.ly * 0.07 - sf * 0.045;
    fieldGroup.position.y = (FIELD_Y[state.route] || 0) - sf * 1.1;

    // MAIN: scroll drives a camera rail — orbit around the field, descend, widen fov
    let bx = camPos.x, by = camPos.y, bz = camPos.z, fovAdd = 0;
    if (state.route === 'main') {
      const denom = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = Math.min(1, scroll.ly / denom);
      const a = p * 0.65;
      const cs = Math.cos(a), sn = Math.sin(a);
      const nx = bx * cs - bz * sn, nz = bx * sn + bz * cs;
      bx = nx; bz = nz;
      by -= p * 7;
      fovAdd = p * 9;
    }

    camera.position.set(
      bx + mouse.lx * 3.4,
      by - mouse.ly * 2.1 - sf * 1.4,
      bz + sf * 2.4
    );
    camera.fov = camFov.fov + fovAdd;
    camera.updateProjectionMatrix();
    lookVec.set(camLook.x + mouse.lx * 1.1, camLook.y - mouse.ly * 0.7, camLook.z);
    camera.lookAt(lookVec);
    camera.rotation.z += mouse.lx * 0.03;                     // subtle roll with the mouse
    renderer.render(scene, camera);
  }

  function loop(now) {
    rafId = requestAnimationFrame(loop);
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    if (fieldFrozen) {
      scroll.ly += (scroll.y - scroll.ly) * 0.06;   // renderFrame is skipped, but the fog reads this
    } else {
      updateField(dt);
      renderFrame();
    }
    fogUpdate(dt);
    frames++;
    if (now - fpsLast > 500) {
      $('#stFps').textContent = 'FPS ' + Math.round(frames * 1000 / (now - fpsLast));
      frames = 0; fpsLast = now;
    }
  }

  startLoop = function () { fieldFrozen = false; if (rafId === null && !REDUCED) { lastT = performance.now(); rafId = requestAnimationFrame(loop); } };
  stopLoop  = function () { if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; } };
  staticFrame = function () { updateField(0.016); renderFrame(); fogUpdate(0.016); };
  // exposes the field-freeze switch to code outside this THREE-guarded block (the loop keeps
  // running so fog keeps drifting; only the field's own update/render is skipped)
  freezeField = function (v) { fieldFrozen = v; };

  document.addEventListener('visibilitychange', () => (document.hidden ? stopLoop() : startLoop()));

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    fogResize();
    if (REDUCED) staticFrame();
  });

  let fogSprite = null;
  function fogUpdate() {}
  {
    const fogCanvas = $('#fog');
    const fctx = fogCanvas.getContext('2d');
    // phones get fewer, smaller blobs: the canvas is ~4x smaller, so the same
    // count and radius would mean heavy overdraw for the same visual density
    const FOG_N = MOBILE ? 18 : 46;
    const FOG_R = MOBILE ? 0.5 : 1;
    const fogParts = [];
    for (let i = 0; i < FOG_N; i++) {
      fogParts.push({
        u: Math.pow(Math.random(), 1.5) * 0.9 - 0.05,
        v: Math.random() * 1.1 - 0.05,
        r: (90 + Math.random() * 160) * FOG_R,
        ph: Math.random() * Math.PI * 2,
        dp: 0.4 + Math.random() * 0.6
      });
    }
    makeFogSprite = function () {
      const hex = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      const n = parseInt(hex.slice(1), 16);
      const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
      const s = document.createElement('canvas'); s.width = s.height = 256;
      const c = s.getContext('2d');
      const grad = c.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0,    'rgba(' + r + ',' + g + ',' + b + ',0.55)');
      grad.addColorStop(0.55, 'rgba(' + r + ',' + g + ',' + b + ',0.18)');
      grad.addColorStop(1,    'rgba(' + r + ',' + g + ',' + b + ',0)');
      c.fillStyle = grad; c.fillRect(0, 0, 256, 256);
      fogSprite = s;
    };
    fogResize = function () { fogCanvas.width = window.innerWidth; fogCanvas.height = window.innerHeight; };
    let fogT = 0;
    // dialled up on pages that have no field to lean on (e.g. brief on a phone,
    // where the field is frozen out) so the fog reads as the scene, not a hint of one
    let fogBoost = 1;
    setFogBoost = function (v) { fogBoost = v; };
    fogUpdate = function (dt) {
      if (!fogSprite) return;
      fogT += dt;
      const wpx = fogCanvas.width, hpx = fogCanvas.height;
      fctx.clearRect(0, 0, wpx, hpx);
      const sv = Math.max(-600, Math.min(600, scroll.y - scroll.ly));
      const rScale = 1 + (fogBoost - 1) * 0.3;
      for (const p of fogParts) {
        p.u += dt * 0.006 * p.dp - sv * dt * 0.00022 * p.dp;
        p.v += Math.sin(fogT * 0.25 + p.ph) * dt * 0.01 - sv * dt * 0.00006 * p.dp;
        if (p.u > 1.12) p.u = -0.12; else if (p.u < -0.12) p.u = 1.12;
        if (p.v > 1.12) p.v = -0.12; else if (p.v < -0.12) p.v = 1.12;
        const x = p.u * wpx + Math.sin(fogT * 0.18 + p.ph) * 36 * p.dp;
        const y = p.v * hpx + Math.cos(fogT * 0.14 + p.ph * 1.7) * 24 * p.dp;
        const r = p.r * rScale;
        fctx.globalAlpha = Math.min(1, 0.16 * p.dp * fogBoost);
        fctx.drawImage(fogSprite, x - r, y - r, r * 2, r * 2);
      }
      fctx.globalAlpha = 1;
    };
  }

  const PALETTES_3D = [
    null,
    { fog: 0xffffff, col: 0xc9d2de, amb: 0xffffff, dir: 0xeaf1ff, accent: 0x2563eb, fogNear: 34, fogFar: 100, dirInt: 1.1  },
    { fog: 0xd5dee6, col: 0xa2b3c4, amb: 0xdfe8f0, dir: 0xcfdeeb, accent: 0x0284c7, fogNear: 20, fogFar: 64,  dirInt: 0.95 },
    { fog: 0xf6f2ec, col: 0xd0c0a8, amb: 0xfdf6ec, dir: 0xffe9d2, accent: 0xc2410c, fogNear: 26, fogFar: 78,  dirInt: 1.05 },
    { fog: 0xeef2f0, col: 0xbccec4, amb: 0xeef6f2, dir: 0xdff0ea, accent: 0x0f766e, fogNear: 28, fogFar: 84,  dirInt: 1.0  }
  ];

  window.__monolithApply3D = function (n, instant) {
    const p = PALETTES_3D[n];
    const dur = (instant || REDUCED) ? 0 : 1.2;
    const cFog = new THREE.Color(p.fog), cCol = new THREE.Color(p.col),
          cAmb = new THREE.Color(p.amb), cDir = new THREE.Color(p.dir),
          cAcc = new THREE.Color(p.accent);
    gsap.to(scene.fog.color,  { r: cFog.r, g: cFog.g, b: cFog.b, duration: dur });
    gsap.to(scene.fog,        { near: p.fogNear, far: p.fogFar, duration: dur });
    gsap.to(colMat.color,     { r: cCol.r, g: cCol.g, b: cCol.b, duration: dur });
    gsap.to(ambLight.color,   { r: cAmb.r, g: cAmb.g, b: cAmb.b, duration: dur });
    gsap.to(dirLight.color,   { r: cDir.r, g: cDir.g, b: cDir.b, duration: dur });
    gsap.to(dirLight,         { intensity: p.dirInt, duration: dur });
    gsap.to(wireMat.color,    { r: cAcc.r, g: cAcc.g, b: cAcc.b, duration: dur });
    pulseLightSrc.color.set(p.accent);
    makeFogSprite();
    if (REDUCED) staticFrame();
  };
  } // end WebGL engine

  function applyPalette(n, instant) {
    state.palette = n;
    localStorage.setItem('m_palette', String(n));
    document.documentElement.setAttribute('data-palette', String(n));
    if (window.__monolithApply3D) window.__monolithApply3D(n, instant);
  }

  $('#palBtn')?.addEventListener('click', () => applyPalette(1));

  /* ==========================================================
     3. I18N + DYNAMIC CONTENT RENDER
     ========================================================== */
  const T = (obj) => obj[state.lang];

  function applyStatic() {
    $$('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (UI[key]) el.textContent = T(UI[key]);
    });
    document.documentElement.lang = state.lang;
    $('#langBtn').textContent = state.lang === 'en' ? 'RU' : 'EN';
    $('#fMessage').placeholder = T(UI['form.msgPh']);
  }

  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

  const TICKER_ANIMATED = !MOBILE && !REDUCED;

  function renderTicker(el, items, sep) {
    const one = items.map((it) => `<span>${esc(it)}<i>${sep}</i></span>`).join('');
    // duplicated only when the marquee actually animates (-50% loop); static tickers
    // (mobile / coarse pointer / reduced motion match the CSS that turns the animation off)
    // must not repeat the list, or the same text visibly appears twice.
    el.innerHTML = TICKER_ANIMATED ? one + one : one;
  }

  function renderDynamic() {
    const L = state.lang;

    $('#heroMetrics').innerHTML = HERO_METRICS.map((m) =>
      `<div class="metric"><div class="metric-value">${esc(m.value)}</div><div class="metric-label">${esc(m.label[L])}</div></div>`).join('');

    renderTicker($('#inputTicker'), ['INPUT:', ...INPUT_TICKER[L]], ' /');
    renderTicker($('#scenarioTicker'), SCENARIO_TICKER[L], ' //');

    $('#oldway').innerHTML = OLDWAY_ROWS.map((r) =>
      `<article class="oldway-card">
        <div class="oldway-pain"><span class="ow-tag mono">${esc(T(UI['oldway.colA']))}</span><p>${esc(r.old[L])}</p></div>
        <div class="oldway-arrow" aria-hidden="true"></div>
        <div class="oldway-fix"><span class="ow-tag mono">${esc(T(UI['oldway.colB']))}</span><p>${esc(r.neu[L])}</p></div>
      </article>`).join('');

    if ($('#economy')) {
      const eh = [T(UI['economy.h0']), T(UI['economy.h1']), T(UI['economy.h2'])];
      const ordered = [...ECONOMY_ROWS].sort((a, b) => (b.ours ? 1 : 0) - (a.ours ? 1 : 0));
      $('#economy').innerHTML =
        `<div class="table economy-desktop">
          <div class="trow thead"><div>${eh[0]}</div><div>${eh[1]}</div><div>${eh[2]}</div></div>` +
          ECONOMY_ROWS.map((r) =>
            `<div class="trow${r.ours ? ' ours' : ''}"><div data-h="${eh[0]}">${esc(r.method[L])}</div><div data-h="${eh[1]}">${esc(r.time[L])}</div><div data-h="${eh[2]}"${r.ours ? ' class="hl"' : ''}>${esc(r.cost[L])}</div></div>`).join('') +
        `</div>
        <div class="econ-mobile">` +
          ordered.map((r) =>
            `<article class="econ-card${r.ours ? ' is-ours' : ''}">
              ${r.ours ? `<span class="econ-badge mono">${esc(T(UI['economy.ours']))}</span>` : ''}
              <h3 class="econ-name">${esc(r.method[L])}</h3>
              <div class="spec-row"><dt>${esc(eh[1])}</dt><dd>${esc(r.time[L])}</dd></div>
              <div class="spec-row"><dt>${esc(eh[2])}</dt><dd>${esc(r.cost[L])}</dd></div>
            </article>`).join('') +
        `</div>`;
    }
    if ($('#packs')) {
      $('#packs').innerHTML = PACKAGES.map((p) =>
        `<div class="pack"><span class="pack-name">${esc(p.name[L])}</span><span class="pack-price mono">${esc(p.price[L])}</span></div>`).join('');
    }

    $('#deliverables').innerHTML = DELIVERABLES.map((d) =>
      `<div class="deliverable"><span class="d-index">${d.index} //</span><h3>${esc(d.title[L])}</h3><p>${esc(d.text[L])}</p></div>`).join('');

    $('#industries').innerHTML = INDUSTRIES.map((i) =>
      `<li class="ind-item"><div class="ind-body">
        <button class="ind-q" type="button"><span>${esc(i[L])}</span><span class="q-plus">+</span></button>
        <div class="ind-a"><p>${esc(i.text[L])}</p></div>
      </div></li>`).join('');

    $('#principles').innerHTML = PRINCIPLES.map((p) =>
      `<div class="principle"><span class="p-index">${p.index} //</span><h3>${esc(p.title[L])}</h3><p>${esc(p.text[L])}</p></div>`).join('');

    $('#pipeline').innerHTML = PIPELINE.map((s) =>
      `<div class="stage" data-stage="${s.id}"><span class="s-id">${s.id} //</span><h3>${esc(s.name[L] || s.name)}</h3><p>${esc(s.text[L])}</p></div>`).join('');

    const mh = ['matrix.h0', 'matrix.h1', 'matrix.h2', 'matrix.h3'].map((k) => T(UI[k]));
    $('#matrix').innerHTML =
      `<div class="table matrix matrix-desktop">` +
        `<div class="trow thead"><div>${mh[0]}</div><div>${mh[1]}</div><div>${mh[2]}</div><div>${mh[3]}</div></div>` +
        INPUT_MATRIX.map((r) =>
          `<div class="trow"><div>${esc(r.type[L])}</div><div>${esc(r.req[L])}</div><div class="dim">${esc(r.plus[L])}</div><div class="dim">${esc(r.not[L])}</div></div>`).join('') +
      `</div>` +
      `<div class="matrix-mobile">` +
        INPUT_MATRIX.map((r, i) =>
          `<details class="matrix-item"${i === 0 ? ' open' : ''}>
            <summary>${esc(r.type[L])}</summary>
            <ul>
              <li class="must"><span class="mx-k mono">${esc(mh[1])}</span>${esc(r.req[L])}</li>
              <li class="plus"><span class="mx-k mono">${esc(mh[2])}</span>${esc(r.plus[L])}</li>
              <li class="skip"><span class="mx-k mono">${esc(mh[3])}</span>${esc(r.not[L])}</li>
            </ul>
          </details>`).join('') +
      `</div>`;

    const ch = [T(UI['compare.h1']), T(UI['compare.h2']), T(UI['compare.h3'])];
    const specs = [
      { title: ch[2], rows: COMPARE_ROWS.map((r) => ({ k: r.label[L], v: r.c[L] })), ours: true },
      { title: ch[0], rows: COMPARE_ROWS.map((r) => ({ k: r.label[L], v: r.a[L] })), ours: false },
      { title: ch[1], rows: COMPARE_ROWS.map((r) => ({ k: r.label[L], v: r.b[L] })), ours: false }
    ];
    $('#compare').innerHTML =
      `<div class="table compare compare-desktop">` +
        `<div class="trow thead"><div></div><div>${ch[0]}</div><div>${ch[1]}</div><div class="hl">${ch[2]}</div></div>` +
        COMPARE_ROWS.map((r) =>
          `<div class="trow"><div>${esc(r.label[L])}</div><div class="dim">${esc(r.a[L])}</div><div class="dim">${esc(r.b[L])}</div><div class="hl">${esc(r.c[L])}</div></div>`).join('') +
      `</div>` +
      `<div class="compare-mobile">
        <div class="compare-track" id="compareTrack">` +
          specs.map((s, i) =>
            `<article class="compare-spec${s.ours ? ' is-ours' : ''}" data-i="${i}">
              ${s.ours ? `<span class="compare-badge mono">${esc(T(UI['compare.ours']))}</span>` : ''}
              <h3>${esc(s.title)}</h3>
              <dl>` + s.rows.map((row) =>
                `<div class="spec-row"><dt>${esc(row.k)}</dt><dd>${esc(row.v)}</dd></div>`).join('') +
              `</dl>
            </article>`).join('') +
        `</div>
        <div class="compare-dots" id="compareDots"></div>
      </div>`;

    $('#iterations').innerHTML = ITERATIONS.map((it) =>
      `<div class="iteration"><span class="i-index">${it.index} //</span><p>${esc(it.text[L])}</p></div>`).join('');

    $('#faq').innerHTML = FAQ.map((f, i) =>
      `<div class="faq-item"><button class="faq-q" type="button"><span class="q-index">Q_0${i + 1} //</span><span>${esc(f.q[L])}</span><span class="q-plus">+</span></button><div class="faq-a"><p>${esc(f.a[L])}</p></div></div>`).join('');

    renderArchive();
    renderBriefAside();
    renderForm();
  }

  /* ---------- 03 CAPABILITIES / CASES ---------- */
  let capFilter = 'ALL';

  function hasRealMedia(item) {
    return !!((item.gallery && item.gallery.length > 1) || item.model3d ||
      (item.media && (item.media.type === 'image' || item.media.type === 'video') && item.media.src));
  }

  function mediaHTML(item) {
    if (item.gallery && item.gallery.length > 1) {
      const alt = esc(item.title[state.lang]);
      return `<div class="cap-carousel">
          <div class="cap-track">` +
            item.gallery.map((src) => `<div class="cap-slide"><img src="${esc(src)}" alt="${alt}" loading="lazy"></div>`).join('') +
          `</div>
          <button type="button" class="cap-arrow cap-arrow-prev" data-dir="-1" aria-label="Prev">‹</button>
          <button type="button" class="cap-arrow cap-arrow-next" data-dir="1" aria-label="Next">›</button>
          <div class="cap-dots">` +
            item.gallery.map((_, i) => `<button type="button" class="cap-dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="${i + 1}"></button>`).join('') +
          `</div>
        </div>`;
    }
    if (item.model3d)
      return `<model-viewer class="cap-model" src="${esc(item.model3d)}"
          alt="${esc(item.title[state.lang])}" camera-controls touch-action="pan-y" auto-rotate
          shadow-intensity="0.7" exposure="1"></model-viewer>`;
    if (item.media && item.media.type === 'image' && item.media.src)
      return `<img src="${esc(item.media.src)}" alt="${esc(item.title[state.lang])}" loading="lazy">`;
    if (item.media && item.media.type === 'video' && item.media.src)
      return `<video src="${esc(item.media.src)}" autoplay muted loop playsinline></video>`;
    return '';
  }

  function cardHTML(item) {
    const L = state.lang;
    const io = `<div class="cap-io">
        <div class="io-row"><span class="io-key">${T(UI['cap.input'])}</span><span class="io-val">${esc(item.input[L])}</span></div>
        <div class="io-row"><span class="io-key">${T(UI['cap.output'])}</span><span class="io-val">${esc(item.output[L])}</span></div>
      </div>`;
    const metrics = `<div class="cap-metrics">` + item.metrics.map((m) =>
      `<div class="cm"><b>${esc(m.value)}</b><span>${esc(m.label[L])}</span></div>`).join('') + `</div>`;
    const meta = item.kind === 'case'
      ? `<span class="c-index">${esc([item.client, item.location, item.year].filter(Boolean).join(' · '))}</span>`
      : `<span class="c-index">${item.index}</span>`;
    const quote = (item.kind === 'case' && item.quote)
      ? `<div class="cap-quote">«${esc(item.quote.text[L])}»<span class="q-author">— ${esc(item.quote.author[L])}</span></div>` : '';
    // 'open' = someone else's model under a licence, 'own' = geometry we generated
    const demo = item.demo ? `<span class="case-demo mono">${esc(T(UI['case.demo_' + item.demo]))}</span>` : '';
    const story = item.story ? `<details class="case-story">
        <summary>${esc(T(UI['case.open']))}</summary>
        ${['task', 'limits', 'approach', 'result'].map((k) => `<div class="cs-row">
          <span class="cs-key mono">${esc(T(UI['case.' + k]))}</span>
          <p>${esc(item.story[k][L])}</p>
        </div>`).join('')}
      </details>` : '';
    // CC BY models oblige us to credit the author; it also backs the demo label
    const source = item.source ? `<p class="case-source">${esc(T(UI['case.source']))}:
        <a href="${esc(item.source.url)}" target="_blank" rel="noopener noreferrer">${esc(item.source.model)}</a>, ${esc(item.source.license)}</p>` : '';
    // no real media yet — skip the media block entirely rather than show an empty tile
    const mediaBlock = mediaHTML(item);
    const media = mediaBlock ? `<div class="cap-media">${mediaBlock}</div>` : '';
    return `<article class="cap-card" data-id="${item.id}" data-sector="${esc(item.sector.en)}">
        ${media}
        <div class="cap-body">
          <div class="cap-top"><span class="c-sector">${esc(item.sector[L])}</span>${meta}</div>
          ${demo}
          <h3>${esc(item.title[L])}</h3>
          <p class="c-desc">${esc(item.description[L])}</p>
          ${io}${metrics}${story}${source}${quote}
        </div>
      </article>`;
  }

  function renderArchive() {
    const caps  = ARCHIVE_ITEMS.filter((i) => i.kind === 'capability' && !i.extra);
    const extra = ARCHIVE_ITEMS.filter((i) => i.kind === 'capability' && i.extra);
    // hide cases that don't have real media yet — a placeholder isn't a case study
    const cases = ARCHIVE_ITEMS.filter((i) => i.kind === 'case' && hasRealMedia(i));

    const sectors = [...new Map(ARCHIVE_ITEMS.map((i) => [i.sector.en, i.sector])).values()];
    $('#capFilters').innerHTML =
      `<button data-f="ALL" class="${capFilter === 'ALL' ? 'active' : ''}">${T(UI['cap.all'])}</button>` +
      sectors.map((s) =>
        `<button data-f="${esc(s.en)}" class="${capFilter === s.en ? 'active' : ''}">${esc(s[state.lang])}</button>`).join('');

    // cases and capabilities are one grid, not two — a demo case is not a separate
    // category from a service card, it's just a card with a demo badge and a story.
    // Within that grid, anything with real media (photo, video, 3D model) floats to
    // the top — a card with only a description isn't proof yet.
    const mainItems = [...cases, ...caps]
      .map((item, i) => ({ item, i }))
      .sort((a, b) => (hasRealMedia(b.item) - hasRealMedia(a.item)) || (a.i - b.i))
      .map((x) => x.item);
    $('#capGrid').innerHTML = mainItems.map(cardHTML).join('');
    // visibility of #extraSection itself is recomputed in applyCapFilter() below,
    // since a filter — not just an empty data set — can also empty this tier
    if (extra.length) $('#extraGrid').innerHTML = extra.map(cardHTML).join('');
    $('#capBadge').style.display = cases.length ? 'none' : '';
    applyCapFilter();
  }

  function applyCapFilter() {
    $$('#capGrid .cap-card, #extraGrid .cap-card').forEach((card) => {
      card.style.display = (capFilter === 'ALL' || card.dataset.sector === capFilter) ? '' : 'none';
    });
    $$('#capFilters button').forEach((b) => b.classList.toggle('active', b.dataset.f === capFilter));
    // a filter can empty the "also" tier entirely — hide the whole section
    // (title included) rather than leave a heading with nothing under it
    const extraSection = $('#extraSection');
    if (extraSection) {
      extraSection.hidden = !$$('#extraGrid .cap-card').some((c) => c.style.display !== 'none');
    }
  }

  /* ---------- 04 BRIEF ---------- */
  function renderBriefAside() {
    const L = state.lang;
    $('#briefSteps').innerHTML = BRIEF_STEPS.map((s) =>
      `<div class="step"><span class="st-index">${s.index} //</span><span class="st-tag">${esc(s.tag[L])}</span><p>${esc(s.text[L])}</p></div>`).join('');

    $('#timelines').innerHTML =
      `<div class="timeline-row thead"><div>${T(UI['time.h0'])}</div><div class="t-meta">${T(UI['time.h1'])} · ${T(UI['time.h2'])}</div></div>` +
      TIMELINES.map((t) => {
        const dots = '●'.repeat(t.tier) + `<i>${'●'.repeat(5 - t.tier)}</i>`;
        return `<div class="timeline-row"><div class="t-product">${esc(t.product[L])}</div><div class="t-meta"><span class="t-time">${esc(t.time[L])}</span><span class="t-tier">${dots}</span></div></div>`;
      }).join('');

    $('#checklist').innerHTML = CHECKLIST.map((c) => `<li>${esc(c[L])}</li>`).join('');
  }

  function renderForm() {
    const L = state.lang;
    // industry select built from the OPEN industries array + "Other"
    $('#fIndustry').innerHTML =
      INDUSTRIES.map((i) => `<option value="${esc(i.en)}">${esc(i[L])}</option>`).join('') +
      `<option value="Other">${T(UI['form.other'])}</option>`;

    $('#fNeeds').innerHTML = FORM_NEEDS.map((n, i) =>
      `<label class="chip"><input type="checkbox" name="needs" value="${esc(n.en)}"${i === 0 && sessionStorage.getItem('m_intent') === 'trial' ? ' checked' : ''}><span>${esc(n[L])}</span></label>`).join('');

    $('#fStages').innerHTML = FORM_STAGES.map((s, i) =>
      `<label class="chip"><input type="radio" name="stage" value="${esc(s.en)}" ${i === 0 ? 'checked' : ''}><span>${esc(s[L])}</span></label>`).join('');
  }

  function setLang(lang) {
    state.lang = lang;
    localStorage.setItem('m_lang', lang);
    applyStatic();
    renderDynamic();
    bindDynamic();
    if (!REDUCED) gsap.fromTo('#pages', { opacity: 0.35 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
  }
  $('#langBtn').addEventListener('click', () => setLang(state.lang === 'en' ? 'ru' : 'en'));

  /* ==========================================================
     4. INTERACTION BINDINGS for re-rendered content
     ========================================================== */
  function bindDynamic() {
    // FAQ accordion — and the industries list, which opens the same way
    [['.faq-item', '.faq-q', '.faq-a'], ['.ind-item', '.ind-q', '.ind-a']].forEach(([itemSel, btnSel, ansSel]) => {
      $$(itemSel).forEach((item) => {
        const btn = $(btnSel, item), ans = $(ansSel, item);
        btn.addEventListener('click', () => {
          const open = item.classList.toggle('open');
          gsap.to(ans, { height: open ? 'auto' : 0, duration: REDUCED ? 0 : 0.45, ease: 'power2.inOut' });
        });
      });
    });

    // LAB stages: hover/click blends in the wireframe state
    $$('.stage').forEach((st) => {
      const on  = () => { if (state.route === 'lab') tweenWeights({ ...STATE_WEIGHTS.lab, normal: 0.08, wireframe: 0.92 }, 0.8); };
      const off = () => { if (state.route === 'lab') tweenWeights(STATE_WEIGHTS.lab, 0.8); };
      st.addEventListener('mouseenter', on);
      st.addEventListener('mouseleave', off);
      st.addEventListener('click', on);
    });

    // capability cards: hover rebuilds the histogram from the card's metrics
    $$('.cap-card').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        const item = ARCHIVE_ITEMS.find((i) => i.id === card.dataset.id);
        if (item) setHistogram(item.metrics.map((m) => m.num || 1));
        if (REDUCED) staticFrame();
      });
      card.addEventListener('mouseleave', () => { setHistogram(null); if (REDUCED) staticFrame(); });
    });

    // case cards: gallery carousel — scroll-snap track (native touch swipe),
    // mouse-drag swipe, dot nav and prev/next arrows, one instance per card
    $$('.cap-carousel').forEach((car) => {
      const track = $('.cap-track', car);
      const dotsWrap = $('.cap-dots', car);
      const prevBtn = $('.cap-arrow-prev', car);
      const nextBtn = $('.cap-arrow-next', car);
      const last = $$('.cap-slide', track).length - 1;

      const setActive = (i) => {
        $$('.cap-dot', dotsWrap).forEach((d, di) => d.classList.toggle('active', di === i));
        if (prevBtn) prevBtn.disabled = i <= 0;
        if (nextBtn) nextBtn.disabled = i >= last;
      };
      const goTo = (i) => {
        const clamped = Math.max(0, Math.min(last, i));
        track.scrollTo({ left: clamped * track.clientWidth, behavior: REDUCED ? 'auto' : 'smooth' });
      };
      const current = () => Math.round(track.scrollLeft / (track.clientWidth || 1));

      track.addEventListener('scroll', () => setActive(current()), { passive: true });
      setActive(0);

      $$('.cap-dot', dotsWrap).forEach((d) => {
        d.addEventListener('click', (e) => { e.stopPropagation(); goTo(parseInt(d.dataset.i, 10)); });
      });
      [prevBtn, nextBtn].forEach((btn) => {
        if (!btn) return;
        btn.addEventListener('click', (e) => { e.stopPropagation(); goTo(current() + parseInt(btn.dataset.dir, 10)); });
      });

      // touch already swipes natively via overflow-x + scroll-snap; add the
      // same drag-to-swipe for a mouse, which has no native horizontal drag
      let dragging = false, startX = 0, startScroll = 0;
      track.addEventListener('pointerdown', (e) => {
        if (e.pointerType !== 'mouse') return;
        dragging = true;
        startX = e.clientX; startScroll = track.scrollLeft;
        track.setPointerCapture(e.pointerId);
        track.classList.add('dragging');
      });
      track.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        track.scrollLeft = startScroll - (e.clientX - startX);
      });
      const endDrag = () => {
        if (!dragging) return;
        dragging = false;
        track.classList.remove('dragging');
        goTo(Math.round(track.scrollLeft / (track.clientWidth || 1)));
      };
      track.addEventListener('pointerup', endDrag);
      track.addEventListener('pointercancel', endDrag);
      track.addEventListener('dragstart', (e) => e.preventDefault());
    });

    // sector filters
    $$('#capFilters button').forEach((b) => {
      b.addEventListener('click', () => { capFilter = b.dataset.f; applyCapFilter(); });
    });

    $$('#briefForm input, #briefForm select, #briefForm textarea').forEach((el) => {
      el.addEventListener('focus', pulse);
    });

    const track = $('#compareTrack');
    const dotsWrap = $('#compareDots');
    if (track && dotsWrap) {
      const cards = $$('.compare-spec', track);
      dotsWrap.innerHTML = cards.map((_, i) => `<button type="button" class="compare-dot${i === 0 ? ' active' : ''}" data-i="${i}" aria-label="${i + 1}"></button>`).join('');
      const setDot = (i) => {
        $$('.compare-dot', dotsWrap).forEach((d, di) => d.classList.toggle('active', di === i));
      };
      track.addEventListener('scroll', () => {
        const w = track.clientWidth || 1;
        setDot(Math.round(track.scrollLeft / w));
      }, { passive: true });
      $$('.compare-dot', dotsWrap).forEach((d) => {
        d.addEventListener('click', () => {
          const i = parseInt(d.dataset.i, 10);
          track.scrollTo({ left: i * track.clientWidth, behavior: REDUCED ? 'auto' : 'smooth' });
        });
      });
    }
  }

  /* ---------- brief form: validate → converge → confirmation + mailto ---------- */
  function submitBrief(data) {
    const subject = 'BRIEF — ' + data.company;
    const body = [
      'Company: ' + data.company,
      'Industry: ' + data.industry,
      'Needs: ' + data.needs.join(', '),
      'Stage: ' + data.stage,
      'Email: ' + data.email,
      '', data.message
    ].join('\n');
    $('#mailtoLink').href = 'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    return $('#mailtoLink').href;
  }

  $('#briefForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const company = $('#fCompany').value.trim();
    const email   = $('#fEmail').value.trim();
    let valid = true;
    $('#fCompany').classList.toggle('invalid', !company); if (!company) valid = false;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    $('#fEmail').classList.toggle('invalid', !emailOk); if (!emailOk) valid = false;
    $('#formError').hidden = valid;
    if (!valid) return;

    const href = submitBrief({
      company, email,
      industry: $('#fIndustry').value,
      needs: $$('#fNeeds input:checked').map((i) => i.value),
      stage: ($('#fStages input:checked') || {}).value || '',
      message: $('#fMessage').value.trim()
    });
    sessionStorage.removeItem('m_intent');

    const showDone = () => { $('#briefForm').hidden = true; $('#briefDone').hidden = false; };
    window.location.href = href;
    showDone();
    if (!MOBILE && !REDUCED && !document.hidden) {
      gsap.timeline()
        .to(fx, { converge: 1, duration: 1.1, ease: 'power3.in' })
        .to(fx, { converge: 0, duration: 1.8, ease: 'power3.out', delay: 0.25 });
    }
  });

  $('#briefAgain').addEventListener('click', () => {
    $('#briefForm').reset();
    $('#briefForm').hidden = false;
    $('#briefDone').hidden = true;
  });

  /* ==========================================================
     5. ROUTER — hash-based, transition overlay, page anims
     ========================================================== */
  function routeFromHash() {
    const r = (location.hash || '').replace(/^#\//, '');
    return PAGES.includes(r) ? r : 'main';
  }

  function setNav(route) {
    $$('#nav a').forEach((a) => a.classList.toggle('active', a.dataset.route === route));
    $('#stCam').textContent = 'CAM: ' + route.toUpperCase();
  }

  /* hero title: word-by-word mask reveal (language-agnostic) */
  function heroEntrance() {
    const title = $('#page-main .hero-title');
    const text = title.textContent.trim().replace(/\s+/g, ' ');
    title.innerHTML = text.split(' ').map((wd) => `<span class="w"><span class="wi">${esc(wd)}</span></span>`).join(' ');
    gsap.fromTo('#page-main .wi', { yPercent: 115 }, {
      yPercent: 0, duration: 0.95, ease: 'power3.out', stagger: 0.065, delay: 0.12
    });
  }

  /* metric values: mono "scramble" that settles into the real number */
  function scramble(el) {
    const target = el.textContent;
    const chars = '0123456789K+–/#';
    let f = 0; const total = 22;
    const iv = setInterval(() => {
      f++;
      el.textContent = target.split('').map((ch, i) =>
        (i < (f / total) * target.length) ? ch : chars[(Math.random() * chars.length) | 0]).join('');
      if (f >= total) { el.textContent = target; clearInterval(iv); }
    }, 40);
  }

  /* MAIN scroll choreography: each section retunes the geometry state */
  const MAIN_CHOREO = [
    ['#heroMetrics',  { normal: 0.25, wireframe: 0, metric: 0.75, exploded: 0 }],
    ['#oldway',       STATE_WEIGHTS.main],
    ['#deliverables', { normal: 0.45, wireframe: 0.55, metric: 0, exploded: 0 }],
    ['#industries',   STATE_WEIGHTS.main],
    ['#principles',   { normal: 0.55, wireframe: 0, metric: 0, exploded: 0.45 }]
  ];

  function pageAnims(route) {
    gsap.set('#gl', { xPercent: 0, opacity: 1 });   // a receded field must not carry over to another route
    startLoop();
    // brief on a phone is a form to fill in, not a scene to watch — kill the
    // field and let only the fog drift behind it
    const noMotion = MOBILE && route === 'brief';
    setFogBoost(noMotion ? 2.4 : 1);
    if (noMotion) { freezeField(true); gsap.set('#gl', { opacity: 0 }); }
    if (REDUCED || document.hidden) return;   // hidden tab: show content plainly, no reveal tweens
    ScrollTrigger.getAll().forEach((t) => t.kill());
    if (!noMotion) {
      $$('#page-' + route + ' [data-animate]').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 26 }, {
          opacity: 1, y: 0, duration: 0.85, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 90%' }
        });
      });
    }
    if (route === 'main') {
      heroEntrance();
      ScrollTrigger.create({
        trigger: '#heroMetrics', start: 'top 85%', once: true,
        onEnter: () => $$('.metric-value').forEach(scramble)
      });
      MAIN_CHOREO.forEach(([sel, tw], idx) => ScrollTrigger.create({
        trigger: sel, start: 'top 70%',
        onEnter:     () => tweenWeights(tw, 1.1),
        onLeaveBack: () => tweenWeights(idx ? MAIN_CHOREO[idx - 1][1] : STATE_WEIGHTS.main, 1.1)
      }));
    }
    // scrolling past the opening screen drifts the field off to the left and
    // fades it, so it stops fighting body text; scrolling back brings it in
    if (!noMotion && (route === 'main' || route === 'brief')) buildHeroRecede(route);
    ScrollTrigger.refresh();
  }

  function showPage(route) {
    PAGES.forEach((p) => $('#page-' + p).classList.toggle('active', p === route));
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });   // bypass smooth scroll: new page always opens at the top
  }

  function goTo(route, instant) {
    const prev = state.route;
    state.route = route;
    setNav(route);
    const sticky = $('#stickyCta');
    if (sticky) sticky.hidden = route === 'brief';
    document.body.classList.toggle('on-brief', route === 'brief');

    // hidden tab: timers are throttled, tweens would stall — switch instantly
    if (instant || document.hidden) {
      instant = true;
      gsap.killTweensOf([w, camPos, camLook, camFov]);
      gsap.set('#overlay', { autoAlpha: 0 });
    }
    if (instant) {
      showPage(route);
      tweenCamera(route, true);
      Object.assign(w, STATE_WEIGHTS[route]);
      fieldGroup.position.x = FIELD_X[route];
      pageAnims(route);
      if (REDUCED) staticFrame();
      return;
    }
    if (state.transitioning) return;
    state.transitioning = true;

    tweenCamera(route);
    tweenWeights(STATE_WEIGHTS[route]);
    gsap.to(fieldGroup.position, { x: FIELD_X[route], duration: 1.4, ease: 'power3.inOut', overwrite: 'auto' });
    if (route === 'capabilities') setHistogram(null);

    $('#ovTarget').textContent = PAGE_INDEX[route] + '/' + route.toUpperCase();

    if (REDUCED) {
      showPage(route);
      state.transitioning = false;
      staticFrame();
      return;
    }

    const prevEl = $('#page-' + prev);
    gsap.timeline({ onComplete: () => { state.transitioning = false; } })
      .to('#overlay', { autoAlpha: 1, duration: 0.18 })
      .fromTo('#ovProgress', { width: '0%' }, { width: '100%', duration: 0.4, ease: 'power1.inOut' }, '<')
      .to(prevEl, { opacity: 0, y: 24, duration: 0.3, ease: 'power2.in' }, '<')
      .call(() => { gsap.set(prevEl, { clearProps: 'opacity,transform' }); showPage(route); pageAnims(route); })
      .to('#overlay', { autoAlpha: 0, duration: 0.3 }, '+=0.05');
  }

  window.addEventListener('hashchange', () => {
    const route = routeFromHash();
    if (route !== state.route) goTo(route);
    document.body.classList.remove('nav-open');
    const scrim = $('#navScrim');
    if (scrim) scrim.hidden = true;
    const burger = $('#burger');
    if (burger) burger.setAttribute('aria-expanded', 'false');
  });

  /* ==========================================================
     6. STATUS BAR, CURSOR, BURGER
     ========================================================== */
  function tickTime() {
    const d = new Date();
    $('#stTime').textContent = [d.getHours(), d.getMinutes(), d.getSeconds()]
      .map((n) => String(n).padStart(2, '0')).join(':');
  }
  setInterval(tickTime, 1000); tickTime();

  let cursorMove = () => {};
  if (FINE && !REDUCED) {
    document.body.classList.add('fine');
    const cur = $('#cursor');
    const qx = gsap.quickTo(cur, 'x', { duration: 0.14, ease: 'power2.out' });
    const qy = gsap.quickTo(cur, 'y', { duration: 0.14, ease: 'power2.out' });
    cursorMove = (x, y) => { qx(x); qy(y); };
    document.addEventListener('mouseover', (e) => {
      cur.classList.toggle('on-link', !!e.target.closest('a, button, input, select, textarea, label, .cap-card'));
      // <model-viewer> paints its own grab/grabbing cursor inside its shadow root —
      // that boundary can't be reached from outside CSS, so hide ours there instead
      // of fighting a cursor we can't override, and let its native one be the only one
      cur.classList.toggle('on-model', !!e.target.closest('model-viewer'));
    });
  }

  $('#burger').addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    $('#burger').setAttribute('aria-expanded', open ? 'true' : 'false');
    const scrim = $('#navScrim');
    if (scrim) scrim.hidden = !open;
  });
  $('#navScrim')?.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    $('#burger').setAttribute('aria-expanded', 'false');
    $('#navScrim').hidden = true;
  });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-intent="trial"]');
    if (a) sessionStorage.setItem('m_intent', 'trial');
  });
  $('#footerMail').href = 'mailto:' + CONTACT_EMAIL;
  $('#footerMail').textContent = CONTACT_EMAIL.toUpperCase();

  /* ==========================================================
     7. INIT
     ========================================================== */
  gsap.registerPlugin(ScrollTrigger);
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  fogResize();
  // applyPalette(state.palette >= 1 && state.palette <= 4 ? state.palette : 1, true);
  applyPalette(3, true);
  applyStatic();
  renderDynamic();
  bindDynamic();
  goTo(routeFromHash(), true);

  if (REDUCED) {
    simT = 1.6;
    staticFrame();          // prefers-reduced-motion → one static, composed frame
  } else {
    startLoop();
  }
})();
