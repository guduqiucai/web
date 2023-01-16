// module.exports = {
//   foo: 'commonjs exports value'
// }

exports.foo = 'commonjs exports value'

// 不能在CommonJS模块中通过require导入ES Module
// const mod = require('./es-module.mjs')
// console.log(mod) // Error [ERR_REQUIRE_ESM]:
