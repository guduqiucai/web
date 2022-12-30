const obj = {
  foo: 'value1',
  bar: 'value2'
}

// 新增1：Object.values 返回对象值组成的数组
console.log(Object.values(obj)) // [ 'value1', 'value2' ]

// 新增2：Object.entries 返回键值对组成的数组
console.log(Object.entries(obj)) // [ [ 'foo', 'value1' ], [ 'bar', 'value2' ] ]
// 这样就可以直接使用for...of方法了,因为之前看到Object对象无法直接使用for...of
for(const i of Object.entries(obj)) { console.log(i) }
// [ 'foo', 'value1' ]
// [ 'bar', 'value2' ]

// 新增3：Object.getOwnPropertyDescriptors 获取对象的完整描述信息
console.log(Object.getOwnPropertyDescriptors(obj))

const p1 = {
  firstName: 'Lei',
  lastName: 'Li',
  get fullName () {
    return this.firstName + ' ' + this.lastName
  }
}
console.log(p1.fullName)

const p2 = Object.assign({}, p1)
p2.firstName = 'mao'
console.log(p2)
// 输出为：{ firstName: 'mao', lastName: 'Li', fullName: 'Lei Li' }
// 可以发现 fullName没有改变,是因为Object.assign复制的时候，将fullName当成普通属性复制的
// 使用Object.getOwnPropertyDescriptors获取对象属性的完整信息,并且重新定义一个新的对象
const p3 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(p1))
p3.firstName = 'mao'
console.log(p3.fullName) // mao Li

// 新增4：String.prototype.padStart 和 String.prototype.padEnd
// 给指定的字符串填充指定的符号（开始或者结束），达到给定的长度
const books = {
  html: 5,
  css: 6,
  js: 128
}
for(const [name, count] of Object.entries(books)) {
  console.log(name, count)
}
// html 5
// css 6
// js 128
// 看起来输出有些乱，可以使用pad方法做一个对齐
for(const [name, count] of Object.entries(books)) {
  console.log(`${ name.padEnd(16, '-') } | ${count.toString().padStart(3, '0')}`)
}

// 新增5：在函数参数的末尾可以添加尾逗号
function foo (
  bar, baz,
){

}
// 数组也可以
const arr = [100, 200, 300,]

// 新增6：Async/await 异步编程小节中有详细解释
