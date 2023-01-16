var name = 'jack'
var age = 18
// var obj = { name, age }
// 导出的并不是字面量，是固定的语法
// export default { name, age }
// 导出的是引用，而不是单纯的值
export { name, age }

setTimeout(function () {
  name = 'ben'
}, 1000)

