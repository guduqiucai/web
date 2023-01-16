import { foo, bar } from './module.mjs'
console.log(foo, bar)
// 导入原生api
import fs from 'fs'
fs.writeFileSync('foo.txt', foo + bar)
// 内置的模块成员可以提取
import { readFileSync } from 'fs'
console.log('foo:' ,readFileSync('foo.txt').toString())

// 导入三方api
import _ from 'loadsh'
console.log(_.camelCase(foo+bar))
// 不能提取成员，因为第三方模块都是导出默认成员
// import { upperCase } from 'loadsh'
// console.log(upperCase(foo+bar))
