import type { ColorTheme } from '../typescript/types.d.ts';

export function colorTheme(theme: ColorTheme) {
  return {
    colors: {},
    semanticHighlighting: true,
    semanticTokenColors: {},
    tokenColors: [],
  };
}
