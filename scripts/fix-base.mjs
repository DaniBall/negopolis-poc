// Prefija con BASE_PATH los enlaces absolutos ("/...") del HTML generado (para GitHub Pages en subruta).
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const base = (process.env.BASE_PATH || '/').replace(/\/$/, '');
if (!base) process.exit(0);
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
for (const f of walk('dist').filter((f) => f.endsWith('.html'))) {
  const s = readFileSync(f, 'utf8')
    .replace(/(href|src|action)="\/(?!\/)([^"]*)"/g, (m, a, rest) => (`/${rest}`.startsWith(base + '/') ? m : `${a}="${base}/${rest}"`));
  writeFileSync(f, s);
}
