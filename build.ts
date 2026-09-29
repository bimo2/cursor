#!/usr/bin/env node

import fs from 'node:fs/promises';
import path from 'node:path';
import { webfont } from 'webfont';
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
        case 'icon-theme': {
          const directory = path.join('themes', extension.id, theme.assets);
          const files = await fs.readdir(directory);

          await fs.cp(directory, path.join(folder, theme.assets), { recursive: true });

          await fs.writeFile(
            path.join(folder, `${theme.id}-icon-theme.json`),
            JSON.stringify(iconTheme(files, theme), null, 2),
          );

          break;
        }
        case 'product-icon-theme': {
          const directory = path.join('themes', extension.id, theme.assets);
          const files = (await fs.readdir(directory)).sort();

          const font = await webfont({
            files: files.map((file) => path.join(directory, file)),
            fontName: theme.id,
            fontHeight: 16,
            formats: ['woff2'],
            sort: true,
          });

          if (!font.woff2) break;

          const map = new Map<string, string>();

          for (const { metadata } of font.glyphsData ?? []) {
            const name = metadata?.name;
            const codepoint = metadata?.unicode?.[0]?.codePointAt(0);

            if (!name || !codepoint) continue;

            map.set(name, `\\${codepoint.toString(16).toUpperCase()}`);
          }

          await fs.mkdir(path.dirname(path.join(folder, theme.assets)), { recursive: true });
          await fs.writeFile(path.join(folder, `${theme.assets}.woff2`), font.woff2);

          await fs.writeFile(
            path.join(folder, `${theme.id}-product-icon-theme.json`),
            JSON.stringify(productIconTheme(map, theme), null, 2),
          );

          break;
        }
      }
    }

    await fs.writeFile(
      path.join(folder, 'package.json'),
      JSON.stringify(manifest(extension), null, 2),
    );

    console.log(extension.id, folder);
  }
})();
