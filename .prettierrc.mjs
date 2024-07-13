/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro', '@ianvs/prettier-plugin-sort-imports'],
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  printWidth: 100,
  arrowParens: 'avoid',
  trailingComma: 'none',
  bracketSpacing: true,
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@components/(.*)$',
    '^@content/(.*)$',
    '^@layouts/(.*)$',
    '^@pages/(.*)$',
    '^@data/(.*)$',
    '^@styles/(.*)$',
    '^@/(.*)$',
    '^.[./].*',
    ''
  ],
  overrides: [
    { files: ['*.json', '*.md', '*.toml', '*.yml'], options: { useTabs: false } },
    { files: ['*.astro'], options: { parser: 'astro' } }
  ]
};
