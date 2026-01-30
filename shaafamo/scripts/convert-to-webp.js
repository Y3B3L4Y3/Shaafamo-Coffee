const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      await walk(p);
      continue;
    }

    if (/\.(jpe?g)$/i.test(e.name)) {
      const out = p.replace(/\.[^.]+$/, '.webp');
      try {
        // Skip if output already exists and is newer
        const [inStat, outStat] = await Promise.all([
          fs.stat(p),
          fs.stat(out).catch(() => null),
        ]);

        if (outStat && outStat.mtimeMs >= inStat.mtimeMs) {
          console.log('Skipping (up-to-date):', p);
          continue;
        }

        await sharp(p).webp({ quality: 80 }).toFile(out);
        console.log('Converted:', p, '→', out);
      } catch (err) {
        console.error('Failed to convert', p, err.message || err);
      }
    }
  }
}

const target = process.argv[2] || path.join(__dirname, '..', 'public', 'images');
walk(target).catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
