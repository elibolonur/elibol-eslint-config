/**
|--------------------------------------------------
| Vue.js TypeScript config
|--------------------------------------------------
**/

// inherit Vue rules only since Vue config is already extending JavaScript and Prettier
const vue = require.resolve('./vue3')

module.exports = {
  env: {
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: ['@vue/eslint-config-typescript/recommended', vue],
  overrides: [
    // This rule to be disabled for ts and vue files since we use global types
    {
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
    // rules for d.ts files
    {
      files: ['*.d.ts'],
      rules: {
        // we might need to use any in type files
        '@typescript-eslint/no-explicit-any': 0,
      },
    },
  ],
  rules: {
    // Enforce adding file extensions for .vue and .js files when importing
    'node/file-extension-in-import': ['error', 'always', { '.js': 'always', '.vue': 'always', '.ts': 'never' }],
  },
}
