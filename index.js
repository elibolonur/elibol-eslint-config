// Default config
const js = require.resolve('./javascript')
const vue = require.resolve('./vue')
const vue = require.resolve('./vue3')

module.exports = {
  // Export by default JS & Vue config
  extends: [vue],
}
