// ex1: 只有运行到obj.foo()这行代码的时候才会报错
const obj = {}
// obj.foo()
// TypeError: obj.foo is not a function

// ex2: 没有按照约定传入数字，而是传入字符串，就会变成字符串拼接
function sum(a, b) {
  return a + b
}
console.log(sum(100, 100)) // 200
console.log(sum(100, '100')) // 100100

// ex3: obj的键会自动转为字符串后再使用
const obj1 = {}
obj1[true] = 100
console.log(obj1[true]) // 100
console.log(obj1['true']) // 100
