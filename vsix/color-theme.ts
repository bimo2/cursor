import type { ColorTheme } from './vsix.d.ts';

export function colorTheme(theme: ColorTheme) {
  return {
    colors: {},
    semanticHighlighting: true,
    semanticTokenColors: {},
    tokenColors: [],
  };
}
