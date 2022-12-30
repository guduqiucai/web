// shared.js===============================共享文件
const cache = {}

// a.js==============================存储一个共享变量
cache['foo'] = '123'

// b.js==因为不知道已经存在foo的key，也存储了键为foo的变量
cache['foo'] = '456'

// 这时获取全局共享的变量，值就有问题了
console.log(cache['foo'])

// 使用Symbol
const s = Symbol()
console.log(s) // Symbol()
console.log(typeof s) // Symbol
console.log(Symbol() === Symbol()) // false

const obj = {}
obj[Symbol()] = '123'
obj[Symbol()] = '456'
console.log(obj)

// 私有属性
const name = Symbol()
const person = {
  [name]: 'Tom',
  say(){
    console.log('Hi, ', this[name])
  }
}
person.say()



