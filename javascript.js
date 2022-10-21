/**
|--------------------------------------------------
| JavaScript config
|--------------------------------------------------
**/

const config = require('./config-variables')
const prettierConfig = require('./prettier.config')

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['sort-imports-es6-autofix', 'import', 'node'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['**/node_modules/**', '**/*.min.js', '**/vendor/**', '**/temp/**', 'dist/**', 'public/**'],
  overrides: [
    {
      files: ['*.json'],
      rules: {
        quotes: [2, 'double'],
      },
    },
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      env: {
        jest: true,
      },
    },
  ],
  rules: {
    // Show prettier rules as error instead of warning
    'prettier/prettier': ['error', prettierConfig],
    // Enforce having imports in the beginning of the file
    'import/first': 'error',
    // Enforce to have exports in the end of the file
    'import/exports-last': 'error',
    // Disable exporting absolute paths
    'import/no-absolute-path': ['error', { esmodule: true, commonjs: true, amd: false }],
    // Sort imports
    'sort-imports-es6-autofix/sort-imports-es6': [
      'error',
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
      },
    ],
    // Enforce a new line after the imports section
    'import/newline-after-import': ['error', { count: 1 }],
    // Enforce blank lines between the given 2 kinds of statements
    'padding-line-between-statements': [
      'error',
      { blankLine: 'any', prev: '*', next: 'return' },
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    // Enforce not to add file extension in the end of the path for vue, js and ts files
    'node/file-extension-in-import': ['error', 'always', { '.js': 'never', '.vue': 'always', '.ts': 'never' }],
    // Enforce not using deprecated API's
    'node/no-deprecated-api': 'error',
    'max-len': [
      'error',
      {
        code: config.printWidth,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    'prefer-arrow-callback': 'error',
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    // Enforce using string template
    'prefer-template': 'error',
    // Enforce using object.key when applicable instead of objec[key]
    'dot-notation': 'error',
    'no-new-wrappers': 'error',
    'no-new-object': 'error',
    'consistent-return': 'error',
    'no-confusing-arrow': 'error',
    'prefer-spread': 'error',
    'no-param-reassign': 'error',
    'default-case': 'error',
    'no-lonely-if': 'error',
    // Enforce not using var
    'one-var': ['error', 'never'],
    radix: ['error', 'as-needed'],
    eqeqeq: 'error',
    'object-shorthand': ['error', 'always'],
    'no-throw-literal': 'error',
    'no-prototype-builtins': 'warn',
    'no-empty': 'warn',
    'no-var': 'warn',
    'no-console': process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod' ? 'error' : 'off',
  },
}
