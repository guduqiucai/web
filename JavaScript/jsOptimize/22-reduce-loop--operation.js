var test = () => {
  var i
  var arr = ['zxc', 38, '前端']
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
test()

// 优化
var test = () => {
  var i
  var arr = ['zxc', 38, '前端']
  var len = arr.length
  for (i = 0; i < len; i++) {
    console.log(arr[i])
  }
}
test()
