function * foo(){
  console.log('zcz')
  return 100
}

const result = foo()
console.log(result)
// 输出：Object [Generator] {}

console.log(result.next())
// zcz
// { value: 100, done: true }

// 使用yield关键字
function * bar () {
  console.log('111')
  yield 100
  console.log('222')
  yield 200
  console.log('333')
  yield 300
}
const generator = bar()
console.log(generator.next())
// 111
// { value: 100, done: false }
console.log(generator.next())
// 222
// { value: 200, done: false }
console.log(generator.next())
// 333
// { value: 300, done: false }

