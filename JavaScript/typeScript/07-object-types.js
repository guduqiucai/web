// @flow
const obj1: {foo: string, bar: number} = { foo: string, bar: 100 }
// 可选参数
const obj2: {foo?: string, bar: number} = { bar: 100 }
// 限制键和值的类型都必须是字符串
const obj3: { [string]: string } = {}
obj3['aa'] = 100