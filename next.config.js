/** Next.js config to ensure Turbopack uses this folder as workspace root */
const path = require('path')

module.exports = {
  turbopack: {
    root: path.resolve(__dirname)
  }
}
