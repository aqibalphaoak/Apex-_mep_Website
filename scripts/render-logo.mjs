import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { mkdirSync } from 'node:fs';

mkdirSync('public/logo-png', { recursive: true });

const jobs = [
  ['public/logo-mark.svg', 'public/logo-png/logo-mark-512.png', 512, 512, 512],
  ['public/logo-mark.svg', 'public/logo-png/logo-mark-192.png', 192, 192, 512],
  ['public/logo.svg', 'public/logo-png/logo-horizontal-1200.png', 1200, null, 384],
  ['public/logo-white.svg', 'public/logo-png/logo-horizontal-white-1200.png', 1200, null, 384],
  ['public/og-image.svg', 'public/logo-png/og-image-1200x630.png', 1200, 630, 96],
];

for (const [src, out, w, h, density] of jobs) {
  const buf = readFileSync(src);
  let img = sharp(buf, { density });
  img = h ? img.resize(w, h) : img.resize({ width: w });
  await img.png().toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`wrote ${out}  (${meta.width}x${meta.height})`);
}
