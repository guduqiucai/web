// 柯里化案例
// 面向过程示例
console.log('12 32 56'.match(/\s+/g))
console.log('12 32 56'.match(/\d+/g))

// 纯函数
function match(reg, str) {
    return str.match(reg)
}

// 柯里化
const _ = require('lodash')
const curryMatch = _.curry(function (reg, str) {
    return str.match(reg)
})

const havaSpace = curryMatch(/\s+/g)
const havaNumber = curryMatch(/\d+/g)
console.log(havaSpace('hello world'))
console.log(havaNumber('abc'))

// 过滤数组中具有空白字符的元素
const filter = _.curry(function (func, array) {
    return array.filter(func)
})
console.log(filter(havaSpace, ['John Connor', 'John_Done']))

// 进一步封装
const findSpace = filter(havaSpace)
console.log(findSpace(['John Connor', 'John_Done']))