interface Theme {
  id: string;
  label: string;
  type: 'color-theme' | 'icon-theme' | 'product-icon-theme';
}

export interface ColorTheme extends Theme {
  type: 'color-theme';
  scheme: 'light' | 'dark';
  colors: {};
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
