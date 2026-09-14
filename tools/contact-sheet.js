/* Contact sheet for case series QA — no dependencies, same stack as serve.js.
   A series is accepted by looking at every frame side by side, not one by one.

   node tools/contact-sheet.js assets/cases            → tools/contact-sheet.html
   node tools/contact-sheet.js /tmp/rack_series out.html
*/
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2] || 'assets/cases';
const OUT = process.argv[3] || path.join('tools', 'contact-sheet.html');

const CHECKS = [
  'Линия пола на одной высоте по всем кадрам',
  'Ни один кадр не выбивается по яркости',
  'Тени падают в одну сторону с одинаковой мягкостью',
  'Разница в габаритах читается как типоразмер, а не как другой ракурс',
  'При пролистывании подряд нет «прыжка» — ряд читается как рост'
];

const files = fs.readdirSync(SRC)
  .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  .sort();

if (!files.length) {
  console.error(`No images in ${SRC}`);
  process.exit(1);
}

const rel = (f) => path.relative(path.dirname(OUT), path.join(SRC, f)).split(path.sep).join('/');

const cells = files.map((f, i) => {
  const kb = Math.round(fs.statSync(path.join(SRC, f)).size / 1024);
  const over = kb > 400 ? ' over' : '';
  return `<figure>
      <img src="${rel(f)}" alt="${f}" loading="lazy">
      <figcaption><span>${String(i + 1).padStart(2, '0')} · ${f}</span><b class="kb${over}">${kb} KB</b></figcaption>
    </figure>`;
}).join('\n');

const html = `<!DOCTYPE html>
<html lang="ru"><head><meta charset="UTF-8">
<title>Контактный лист — ${SRC}</title>
<style>
  :root { --line: rgba(38,32,27,.16); --muted: rgba(38,32,27,.55); --accent: #c2410c; }
  body { margin: 0; padding: 32px; background: #f6f2ec; color: #26201b;
         font: 14px/1.5 -apple-system, "Inter Tight", system-ui, sans-serif; }
  h1 { font-size: 18px; letter-spacing: .02em; margin: 0 0 4px; }
  .meta { color: var(--muted); font-size: 12px; margin-bottom: 24px; }
  .checks { border: 1px solid var(--line); padding: 16px 18px; margin-bottom: 28px; max-width: 720px; }
  .checks p { margin: 0 0 10px; font-size: 11px; letter-spacing: .12em; color: var(--accent); text-transform: uppercase; }
  .checks label { display: flex; gap: 10px; align-items: flex-start; padding: 5px 0; cursor: pointer; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 18px; }
  figure { margin: 0; border: 1px solid var(--line); background: #fff; }
  img { width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block; }
  figcaption { display: flex; justify-content: space-between; gap: 12px;
               padding: 8px 10px; font-family: ui-monospace, "IBM Plex Mono", monospace;
               font-size: 10px; letter-spacing: .06em; color: var(--muted); border-top: 1px solid var(--line); }
  .kb.over { color: #b91c1c; font-weight: 700; }
  .strip { display: flex; gap: 2px; overflow-x: auto; margin-bottom: 28px; padding-bottom: 6px; }
  .strip img { width: 150px; aspect-ratio: 16/9; }
</style></head><body>
<h1>Контактный лист — ${SRC}</h1>
<div class="meta">${files.length} кадров · собрано ${new Date().toLocaleString('ru-RU')} · лимит веса 400 КБ</div>

<div class="strip">${files.map((f) => `<img src="${rel(f)}" alt="" loading="lazy">`).join('')}</div>

<div class="checks">
  <p>Приёмка серии</p>
  ${CHECKS.map((c) => `<label><input type="checkbox"> <span>${c}</span></label>`).join('\n  ')}
</div>

<div class="grid">
${cells}
</div>
</body></html>`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
console.log(`${files.length} frames -> ${OUT}`);
