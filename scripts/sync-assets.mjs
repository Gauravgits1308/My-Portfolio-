import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('assets');
const destDir = path.resolve('public/assets');

if (!fs.existsSync(srcDir)) {
  console.log('No root assets directory found, skipping sync.');
  process.exit(0);
}

// If public/assets is a symlink, remove the symlink
try {
  const lstat = fs.lstatSync(destDir);
  if (lstat.isSymbolicLink()) {
    fs.unlinkSync(destDir);
    console.log('Replaced public/assets symlink with directory target.');
  }
} catch {
  // Doesn't exist, proceed
}

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.DS_Store' || entry.name.endsWith('.mov')) continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      if (!fs.existsSync(destPath)) fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyRecursive(srcDir, destDir);
console.log('✓ Successfully synced production assets into public/assets');

