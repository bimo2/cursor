import type { Extension } from '../../vsix/vsix.d.ts';

export default {
  id: 'cursor',
  name: 'Cursor',
  description: 'Cursor theme',
  version: '1.0.0',
  icon: 'cursor.png',
  exports: [
    {
      id: 'cursor',
      label: 'Cursor',
      type: 'color-theme',
      scheme: 'dark',
      colors: {},
    },
    {
      id: 'cursor',
      label: 'Cursor',
      type: 'icon-theme',
      assets: 'assets/icons',
    },
    {
      id: 'cursor',
      label: 'Cursor',
      type: 'product-icon-theme',
      assets: 'assets/cursor',
    },
  ],
} satisfies Extension;
