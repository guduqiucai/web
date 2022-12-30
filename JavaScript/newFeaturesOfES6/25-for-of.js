const arr = [1, 2, 3, 4]
for(const i of arr) {
  console.log(i)
}
// 以前使用forEach
arr.forEach(i => console.log(i))

for(const i of arr) {
  console.log(i)
  // 可以终止循环
  if(i > 1) break;
}
// arr.forEach() // 不能终止遍历

// 遍历Set
const s = new Set(['foo', 'bar'])
for(const i of s) {
  console.log(i)
}
// foo bar

// 遍历map
const m = new Map()
m.set('foo', 123)
m.set('bar', 456)
for(const i of m) {
  console.log(i)
}
// [ 'foo', 123 ] [ 'bar', 456 ]

// 遍历对象
const obj = {foo: 123, bar: 456}
for (const i of obj) {
  console.log(i)
}
// 报错：TypeError: obj is not iterable
// 在下一个小节处理


