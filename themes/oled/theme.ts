import type { Colors, Extension, TerminalColors, TokenColors } from '../../typescript/types.d.ts';

const o1: TerminalColors = {
  black: '#262626',
  red: '#ff2146',
  green: '#1cd673',
  yellow: '#e6f520',
  blue: '#2194ff',
  magenta: '#a770ff',
  cyan: '#34dbed',
  white: '#d1d1d1',
  brightBlack: '#5c5c5c',
  brightRed: '#ff5974',
  brightGreen: '#55e096',
  brightYellow: '#ecf858',
  brightBlue: '#59afff',
  brightMagenta: '#bd94ff',
  brightCyan: '#67e4f2',
  brightWhite: '#dddddd',
};

function oled(tokens: Partial<TokenColors>) {
  return {
    text: '#ffffff',
    background: '#010203',
    primary: '#ffffff',
    secondary: '#d0d1d2',
    error: o1.red,
    warning: o1.yellow,
    info: o1.blue,
    debug: o1.magenta,
    added: o1.green,
    deleted: o1.red,
    modified: o1.blue,
    terminal: o1,
    tokens: {
      default: '#ffffff',
      comment: '#606061',
      keyword: '#bdbdbd',
      variable: '#ffffff',
      function: '#e4e4e5',
      type: '#ffffff',
      attribute: '#d1d1d1',
      literal: '#bdbdbd',
      string: '#999a9a',
      other: '#a9aaaa',
      ...tokens,
    },
  } satisfies Colors;
}

export default {
  id: 'oled',
  name: 'OLED',
  description: 'Cursor OLED themes',
  version: '1.0.0',
  icon: 'oled.png',
  exports: [
    {
      id: 'cursor-oled',
      label: 'Cursor OLED',
      type: 'color-theme',
      scheme: 'dark',
      colors: oled({
        keyword: '#afafff',
        function: '#7bd6cc',
        literal: '#69acff',
      }),
    },
    {
      id: 'cursor-oss',
      label: 'Cursor OSS',
      type: 'color-theme',
      scheme: 'dark',
      colors: oled({
        keyword: '#409fff',
        literal: '#409fff',
      }),
    },
    {
      id: 'cursor-tls',
      label: 'Cursor TLS',
      type: 'color-theme',
      scheme: 'dark',
      colors: oled({
        keyword: '#ff365b',
        literal: '#ff365b',
      }),
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
