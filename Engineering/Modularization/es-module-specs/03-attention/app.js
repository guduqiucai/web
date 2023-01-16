// 导入的并不是解构写法，是固定的语法
import { name } from './module.js'
console.log(name)

// 导入的成员是只读的，不能修改
// name = 'tom'

setTimeout(function () {
  console.log(name)
}, 1500)
