export {}
let age = 18 // 推断为number类型
// age = 'string' // 报错

let foo // 无法推断时，就是any类型
foo = 100 // 不会报错
foo = 'string' // 不会报错

