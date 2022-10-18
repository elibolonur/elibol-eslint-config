// File is used in project root to get the prettier rules

const config = require('./config-variables')

module.exports = {
  printWidth: config.printWidth,
  tabWidth: config.indent,
  singleQuote: true,
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'always',
  htmlWhitespaceSensitivity: 'ignore',
}
