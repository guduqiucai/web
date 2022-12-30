
const baz = '123'
const obj = {
  name: 'tom',
  // baz: baz 如果key和变量名相同可以简写为：
  baz,
  // method1: function () {
  //   console.log('method1')
  // }
  // 方法也可以省略冒号和function,简写为：
  method1() {
    console.log('method1')
  },
  // Math.random(): 'abx'
  // key必须是确定的值，或者定义完成后，通过[]的方式添加
  // ES6以后可以直接使用[]的方式定义动态属性名，如下
  [Math.random()]: 'abx'
}
// 如果key不确定，只能通过这种方式添加
// obj[Math.random()] = 'abx'

console.log(obj)
obj.method1()
