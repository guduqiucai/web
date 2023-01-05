// obj1 和 obj2是循环引用对象
function fn() {
  const obj1 = {}
  const obj2 = {}
  obj1.name = obj2
  obj2.name = obj1
  return 'lg is a coder'
}
fn()
