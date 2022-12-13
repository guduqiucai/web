const _ = require('lodash')
// 纯函数
const reverse = array => array.reverse()
const first = array => array[0]
const upperCase = str => str.toUpperCase()
// 演示
const upperCaseLast = _.flowRight(upperCase, first, reverse)
console.log(upperCaseLast(['hello', 'function', 'compose']))