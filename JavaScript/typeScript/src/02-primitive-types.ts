const a: string = 'foo'
const b: number = 100 // NaN // Infinity
const c: boolean = false // true
// 以上三种类型可以赋值为null, 需要关闭严格模式: "strict": false
const d: string = null

const e: void = undefined // null，严格模式下只能是 undefined
const f: null = null
const g: undefined = undefined
const h: symbol = Symbol()

