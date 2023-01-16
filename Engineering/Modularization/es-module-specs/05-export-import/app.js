// 直接导出导入的成员，一般在index.js中使用，组织散落的模块
// export { name, age  } from './module.mjs'

// 分别导入比较麻烦
// import { button } from './components/button.js'
// import { avatar } from './components/avatar.js'
// console.log(button, avatar)

// 集中在components/index.js中导入，然后只需要导入index.js文件
import { button, avatar } from './components'
console.log(button, avatar)
