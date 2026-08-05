import type { Extension } from '../../typescript/types.js';

export default {
  id: 'oled',
  name: 'OLED',
  description: 'Cursor OLED theme',
  version: '1.0.0',
  icon: 'oled.png',
  exports: [
    {
      id: 'cursor-oled',
      label: 'Cursor OLED',
      type: 'color-theme',
      scheme: 'dark',
      colors: {},
    },
    {
      id: 'cursor-oled',
      label: 'Cursor OLED',
      type: 'icon-theme',
      assets: 'assets/icons',
    },
    {
      id: 'cursor-oled',
      label: 'Cursor OLED',
      type: 'product-icon-theme',
      assets: 'assets/octicons',
    },
  ],
} satisfies Extension;
