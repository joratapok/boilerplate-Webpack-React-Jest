module.exports = {
  jsxSingleQuote: false,
  singleQuote: true,
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  bracketSameLine: false,
  useTabs: false,
  arrowParens: 'always',
  endOfLine: 'auto',
  bracketSpacing: false,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/app(.*)$',
    '^@/pages(.*)$',
    '^@/widgets(.*)$',
    '^@/features(.*)$',
    '^@/entities(.*)$',
    '^@/shared(.*)$',
    '^@/assets(.*)$',
    '',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
};
