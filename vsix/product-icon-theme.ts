import type { ProductIconTheme } from '../typescript/types.d.ts';

export function productIconTheme(map: Map<string, string>, theme: ProductIconTheme) {
  return {
    fonts: [
      {
        id: theme.id,
        src: [
          {
            path: `./${theme.assets}.woff2`,
            format: 'woff2',
          },
        ],
        weight: 'normal',
        style: 'normal',
      },
    ],
    iconDefinitions: Object.fromEntries(
      Array.from(map.entries()).map(([name, codepoint]) => [
        name,
        {
          fontId: theme.id,
          fontCharacter: codepoint,
        },
      ]),
    ),
  };
}
