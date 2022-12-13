// lodash 中的 curry 基本使用
const _ = require('lodash')

function getSum(a, b, c) {
    return a + b + c
}
console.log(getSum(1, 2, 3))

const curriedGetSum = _.curry(getSum)

console.log(curriedGetSum(1, 2, 3))
console.log(curriedGetSum(1)(2, 3))
console.log(curriedGetSum(1, 2)(3))