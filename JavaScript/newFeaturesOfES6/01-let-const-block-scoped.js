if(true) {
  var foo = 'foo'
}
console.log(foo)
// 输出为'foo', 使用var 没有块级作用域

if(true) {
  let bar = 'bar'
}
// console.log(bar)
// ReferenceError: bar is not defined,使用let定义的变量只在块级作用域中有效


for(var i = 0; i < 3; i++) {
  for(var i = 0; i < 3; i++) {
    console.log(i)
  }
}
// 只会输出0, 1, 2, 相当于只走了内层的for循环

for(let i = 0; i < 3; i++) {
  for(let i = 0; i < 3; i++) {
    console.log(i)
  }
}
// 改成let后就会输出三次0, 1, 2,因为两个i只会在自己的作用域生效


// 模拟DOM元素上绑定点击事件
var elements = [{}, {}, {}]
for(var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    console.log(i)
  }
}
elements[1].onclick()
// 无论调用哪个元素的点击事件都会输出3，因为var是全局作用域的变量，循环执行完成后i的值都会变成3

// 之前的解决方法是使用闭包来解决
var elements = [{}, {}, {}]
for(var i = 0; i < elements.length; i++) {
  elements[i].onclick = (function (i) {
    return function (){
      console.log(i)
    }
  })(i)
}
elements[1].onclick()
// 输出为1

// 改为let声明就可以解决
var elements = [{}, {}, {}]
for(let i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    console.log(i)
  }
}
elements[1].onclick()
// 输出为当前i的值1


for (let i = 0; i < 3; i++){
  let i = 'foo'
  console.log(i)
}
// 输出三次foo,虽然变量名称相同，但是作用域互不影响，可以看成三次if判断


console.log(zoo)
// 因为var定义的变量存在声明提升，所以不会报错，打印的是undefined
var zoo = 'zoo'

// console.log(zoo1)
// let定义的变量不存在声明提升，所以报错，打印的是ReferenceError: Cannot access 'zoo1' before initialization
let zoo1 = 'zoo1'


const baz = 'baz'
// baz = 'baz1'
// const定义的变量无法再赋值，且必须在声明的时候赋值；TypeError: Assignment to constant variable.

const obj = {}
obj.name = 'cxz'
// 这里的赋值不会报错，是因为我们没有修改obj的内存地址的指针，只是修改了对应的值
