const MayBe = require('folktale/maybe')

const toRMB = s => MayBe.fromNullable(s)
    .map(v => v.replace('$', ''))
    .map(parseFloat)
    .map(v => v * 7)
    .map(v => v.toFixed(2))
    .map(v => '¥' + v)
    .getOrElse('nothing')

// console.log(toRMB('$29.9'))
console.log(toRMB(null))


