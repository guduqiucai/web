// 变量局部化（全局、局部）
// 这样可以提高代码的执行效率（减少数据访问时需要查找的路径）
// 数据的存储和读取
// 优化前
var i, str = ''
function packageDom () {
  for(i = 0; i < 1000; i++) {
    str += i
  }
}
packageDom()
// 优化后
function packageDom () {
  let str = ''
  for(let i = 0; i < 1000; i++) {
    str += i
  }
}
packageDom()
