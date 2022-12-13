// 改造上一个示例
// NEVER SAY DIE => never-say-die
// 先用空格分割，再转为小写，最后用-拼接
const fp = require('lodash/fp')

const f = fp.compose(fp.join('-'), fp.map(fp.toLower), fp.split(' '))
console.log(f('NEVER SAY DIE'))