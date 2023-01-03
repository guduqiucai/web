// @flow
// 字面量类型
const a: 'foo' = 'foo'
a = 'bar'

const type: 'success' | 'warning' | 'danger' = 'success'

const b: string | number = 'string' // 100

type StringOrNumber = string | number
const c: StringOrNumber = 100

// Maybe类型：number|null|void|undefined
const gender: ?number = null