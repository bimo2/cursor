import type { Config } from 'prettier';

export default {
  printWidth: 100,
  singleQuote: true,
  quoteProps: 'consistent',
  xmlWhitespaceSensitivity: 'ignore',
  plugins: ['@prettier/plugin-xml'],
} satisfies Config;
