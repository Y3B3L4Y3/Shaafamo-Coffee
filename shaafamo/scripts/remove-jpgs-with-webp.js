const fs = require('fs').promises;
const path = require('path');

async function removeJpgs(targetDir) {
  const entries = await fs.readdir(targetDir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(targetDir, e.name);
    if (e.isDirectory()) {
      await removeJpgs(p);
      continue;
    }

    if (/\.(jpe?g)$/i.test(e.name)) {
      const webp = p.replace(/\.[^.]+$/, '.webp');
      try {
        await fs.access(webp);
        // webp exists — remove the jpg/jpeg
        await fs.unlink(p);
        console.log('Removed original JPG:', p);
      } catch (err) {
        // webp does not exist — skip
        // console.log('No webp counterpart, keeping:', p);
      }
    }
  }
}

const target = process.argv[2] || path.join(__dirname, '..', 'public', 'images');
removeJpgs(target)
  .then(() => console.log('Done removing JPGs with WebP counterparts.'))
  .catch((err) => {
    console.error('Error while removing JPGs:', err.message || err);
    process.exitCode = 1;
  });
