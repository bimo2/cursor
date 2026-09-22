import type { Config } from 'prettier';

export default {
  plugins: ['@prettier/plugin-xml'],
  printWidth: 100,
  singleQuote: true,
  quoteProps: 'consistent',
  xmlWhitespaceSensitivity: 'ignore',
} satisfies Config;
