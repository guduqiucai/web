// 求数组的最后一项
const _ = require('lodash')

function reverse(array) {
    return array.reverse()
}

function first(array) {
    return array[0]
}

function compose(f, g) {
    return function (value) {
        return f(g(value))
    }
}

// 测试
const last = compose(first, reverse)
console.log(last(['a', 'b', 'c']))