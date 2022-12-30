const arr = [100, 200, 300]

// 之前数组的取值
// const foo = arr[0]
// const bar = arr[1]
// const baz = arr[2]
// console.log(foo, bar, baz)
// 输出：100 200 300

// 使用解构
const [, bar, baz] = arr
console.log(bar, baz)
// 输出：200 300

const [foo, ...rest] = arr
console.log(foo, rest)
// 输出：100 [ 200, 300 ]， 使用...rest进行剩余成员收集

const [a, b, c, d = 400, e] = arr
console.log(a, b, c, d, e)
// 输出：100 200 300 400 undefined，可以赋值默认值, 如果取不到，就是undefined

// 获取字符串指定位置的值
const str = 'foo/bar/baz'
const strArr = str.split('/')
const str1 = strArr[1]
console.log(str1)

// 使用解构获取
const [, , str2] = str.split('/')
console.log(str2)

