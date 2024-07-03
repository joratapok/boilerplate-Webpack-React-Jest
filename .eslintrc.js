module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    '@feature-sliced/eslint-config/rules/layers-slices',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.js', '.jsx'],
    },
    react: {
      version: 'detect',
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['node_modules/',  'dist/',  'coverage/'],
  plugins: ['react', '@typescript-eslint', 'import', 'jsx-a11y', 'react-hooks', 'prettier', 'jest', 'boundaries'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_|React',
        caughtErrorsIgnorePattern: '^_',
      },
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/no-unknown-property': ['error', {ignore: ['css']}],
    'prettier/prettier': 'error',
  },
};
