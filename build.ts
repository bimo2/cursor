#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { colorTheme, manifest, iconTheme, productIconTheme } from './vsix/index.ts';

(async function () {
  await fs.rm('out', { recursive: true, force: true });
  await fs.mkdir('out');

  const id = process.argv[2];
  const extensions = await import('./themes/index.ts');

  for (const extension of Object.values(extensions)) {
    if (id && extension.id !== id) continue;

    const folder = path.join('out', extension.id);

    await fs.mkdir(folder, { recursive: true });

    await fs.cp(
      path.join('themes', extension.id, extension.icon),
      path.join(folder, extension.icon),
    );

    for (const theme of extension.exports) {
      switch (theme.type) {
        case 'color-theme':
          await fs.writeFile(
            path.join(folder, `${theme.id}-color-theme.json`),
            JSON.stringify(colorTheme(theme), null, 2),
          );

          break;
        case 'icon-theme':
          await fs.cp(
            path.join('themes', extension.id, theme.assets),
            path.join(folder, theme.assets),
            { recursive: true },
          );

          await fs.writeFile(
            path.join(folder, `${theme.id}-icon-theme.json`),
            JSON.stringify(iconTheme(theme), null, 2),
          );

          break;
        case 'product-icon-theme':
          const font = `${theme.assets}.woff`;

          await fs.mkdir(path.dirname(path.join(folder, font)), { recursive: true });
          await fs.writeFile(path.join(folder, font), '');

          await fs.writeFile(
            path.join(folder, `${theme.id}-product-icon-theme.json`),
            JSON.stringify(productIconTheme(theme), null, 2),
          );

          break;
      }
    }

    await fs.writeFile(
      path.join(folder, 'package.json'),
      JSON.stringify(manifest(extension), null, 2),
    );

    console.log(extension.id, folder);
  }
})();
