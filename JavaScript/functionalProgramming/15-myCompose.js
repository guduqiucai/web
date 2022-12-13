const _ = require('lodash')
// 纯函数
const reverse = array => array.reverse()
const first = array => array[0]
const upperCase = str => str.toUpperCase()
// 演示
const upperCaseLast = _.flowRight(upperCase, first, reverse)
console.log(upperCaseLast(['hello', 'function', 'compose']))

function compose(...args) {
    return function (value) {
        return args.reverse().reduce(function (acc, fn) {
            return fn(acc)
        }, value)
    }
}

// 测试
const upperCaseLast1 = compose(upperCase, first, reverse)
console.log(upperCaseLast1(['hello', 'function', 'compose']))

// es6改造 compose()
const composeEs6 = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value)
const upperCaseLast2 = composeEs6(upperCase, first, reverse)
console.log(upperCaseLast2(['hello', 'function', 'compose']))