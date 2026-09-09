interface Theme {
  id: string;
  label: string;
  type: 'color-theme' | 'icon-theme' | 'product-icon-theme';
}

export interface Colors {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  error: string;
  warning: string;
  info: string;
  debug: string;
  added: string;
  deleted: string;
  modified: string;
  terminal: TerminalColors;
  tokens: TokenColors;
}

export interface TerminalColors {
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
  white: string;
  brightBlack: string;
  brightRed: string;
  brightGreen: string;
  brightYellow: string;
  brightBlue: string;
  brightMagenta: string;
  brightCyan: string;
  brightWhite: string;
}

export interface TokenColors {
  default: string;
  comment: string;
  keyword: string;
  variable: string;
  function: string;
  type: string;
  attribute: string;
  literal: string;
  string: string;
  other: string;
}

export interface ColorTheme extends Theme {
  type: 'color-theme';
  scheme: 'light' | 'dark';
  colors: Colors;
}

export interface IconTheme extends Theme {
  type: 'icon-theme';
  assets: string;
}

export interface ProductIconTheme extends Theme {
  type: 'product-icon-theme';
  assets: string;
}

export interface Extension {
  id: string;
  name: string;
  description: string;
  version: string;
  icon: string;
  exports: (ColorTheme | IconTheme | ProductIconTheme)[];
}
