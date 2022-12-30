const arr = [0, 1, 2, 3]

console.log(
  arr[0],
  arr[1],
  arr[2],
  arr[3]
)
// 输出：0 1 2 3

// 如果参数不确定，之前我们需要使用apply方法获取实参
console.log.apply(console, arr)
// 输出：0 1 2 3

// 使用数组展开操作符
console.log(...arr)
// 输出：0 1 2 3
