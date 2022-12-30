const obj = { name: 'zxc', age: 18 }
const { name } = obj
console.log(name)
// 输出：zxc

// 如果当前作用域中已存在和key相同的变量，这时需要使用重命名
const age = 20
// const { age } = obj
// 会提示age已存在，需要使用以下写法
const { age: objAge } = obj
console.log(age, objAge)
// 输出：20 18

const { sex = 'man' } = obj
console.log(sex)
// 输出：man

// 如果需要在别名后面加默认值，直接加等号就行
const { level: objLevel = 2 } = obj
console.log(objLevel)
// 输出：2

// 也可以解构出log方法
const { log } = console
log(123)
// 输出：123


