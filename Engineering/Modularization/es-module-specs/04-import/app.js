// 文件后缀不能省略，"./"也不能省略
// 可以使用绝对路径，也可以使用http网站链接
// import { name } from './module.js'
// console.log(name)

// 文件目录下的index.js可以省略
import { lowerCase } from './utils'
console.log(lowerCase('Hello'))

// 直接执行该模块，而不会提取任何成员
import {} from './module.js'
// 简写
import './module.js'

// 提取模块的所有导出成员，mod.name使用
import * as mod from './module.js'

// import 只能放在顶层使用，不能嵌套到函数或者if块中使用
// 可以采用动态导入的方法,使用全局import()方法导入，返回的是
// promise，可以通过then拿到导出的成员
import('./module.js').then(function (module) {
  console.log(module)
})

// 同时提取默认成员和具体成员
// import {name, age, default as str } from './module.js'
// 左边接受的就是导出的默认成员
import str, { name, age } from './module.js'
console.log(name, age, str)
