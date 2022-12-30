function foo(num) {
  return num + 1
}
console.log(foo(100))

// 箭头函数
const foo1 = num => num + 1
console.log(foo1(100))


const arr = [1, 2, 3, 4, 5]
// 过滤奇数
const odd = arr.filter(function (num) {
  return num % 2
})
console.log(odd)

// 箭头函数
const odd1 = arr.filter(num => num % 2)
console.log(odd1)
