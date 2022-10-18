// Default config
const js = require.resolve('./javascript')
const vue = require.resolve('./vue')

module.exports = {
  // Export by default JS & Vue config
  extends: [js, vue],
}
