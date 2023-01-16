import mod from './commonJS.js'
// ES Module中可以导入CommonJS模块
console.log(mod) // { foo: 'commonjs exports value' }

import  { foo } from './commonJS.js'
console.log(foo) //commonjs exports value

export const bar = 'es module export value'
