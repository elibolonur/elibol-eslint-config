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
  rules: {},
}
