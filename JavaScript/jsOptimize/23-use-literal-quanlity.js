// let test = () => {
//   let obj = new Object()
//   obj.name = 'zxc'
//   obj.age = 18
//   obj.slogan = '前端'
//   return obj
// }
// console.log(test())

// 优化
let test = () => {
  let obj = {
    name: 'zxc',
    age: 18,
    slogan: '前端'
  }
  return obj
}
console.log(test())

var str2 = new String('zxc')
// 优化
var str1 = 'zxc'
