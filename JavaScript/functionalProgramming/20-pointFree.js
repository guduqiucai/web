// 转换： Hello World => hello_world
// 非point free 模式
const f = str => str.toLowerCase().replace(/\s+/g, '_')
console.log(f('Hello World'))

// point free
const fp = require('lodash/fp')
const g = fp.flowRight(fp.replace(/\s+/g, '_'), fp.toLower)
console.log(g('Hello World'))