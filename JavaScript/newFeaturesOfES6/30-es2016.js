// 新增1：Array.prototype.includes
const arr = ['foo', 1, NaN, false]
// 之前判断数组是否包含某值
console.log(arr.indexOf('foo')) // 0
console.log(arr.indexOf(1)) // 1
console.log(arr.indexOf(NaN)) // -1,这就是问题，不能查询NaN

// includes方法, 直接返回布尔值表示存不存在
console.log(arr.includes(1)) // true
console.log(arr.includes(NaN)) // true
console.log(arr.includes(2)) // false


// 新增2：指数运算符
// 之前使用Math.pow
console.log(Math.pow(2, 10)) // 1024
// 使用**
console.log( 2 ** 10) // 1024

