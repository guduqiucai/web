function foo(enable) {
  // 之前默认值需要加判断,这种短路运算传入是false的时候，也会取默认值true
  // enable = enable || true
  // 正确的做法是判断是否是undefined
  enable = enable === undefined ? true : enable
  console.log(enable)
}

foo(false)
foo()

// 使用参数默认值的方式
function foo1(enable = true) {
  console.log(enable)
}
foo1(false)
foo1()
