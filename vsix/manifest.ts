import type { ColorTheme, Extension, IconTheme, ProductIconTheme } from '../typescript/types.d.ts';

export function manifest(extension: Extension) {
  const themes = extension.exports
    .filter((theme): theme is ColorTheme => theme.type === 'color-theme')
    .map((theme) => ({
      id: theme.id,
      label: theme.label,
      uiTheme: theme.scheme === 'dark' ? 'vs-dark' : 'vs',
      path: `./${theme.id}-color-theme.json`,
    }));

  const iconThemes = extension.exports
    .filter((theme): theme is IconTheme => theme.type === 'icon-theme')
    .map((theme) => ({
      id: theme.id,
      label: theme.label,
      path: `./${theme.id}-icon-theme.json`,
    }));

  const productIconThemes = extension.exports
    .filter((theme): theme is ProductIconTheme => theme.type === 'product-icon-theme')
    .map((theme) => ({
      id: theme.id,
      label: theme.label,
      path: `./${theme.id}-product-icon-theme.json`,
    }));

  return {
    name: extension.id,
    displayName: extension.name,
    description: extension.description,
    repository: 'github:bimo2/cursor',
    version: extension.version,
    publisher: 'bimo2',
    license: 'MIT',
    icon: extension.icon,
    engines: {
      vscode: '^1.128.0',
    },
    contributes: {
      ...(themes.length && { themes }),
      ...(iconThemes.length && { iconThemes }),
      ...(productIconThemes.length && { productIconThemes }),
    },
  };
}
