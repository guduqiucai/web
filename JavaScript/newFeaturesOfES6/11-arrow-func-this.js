const person = {
  name: 'tom',
  sayHi: function () {
    console.log(`Hi, my name is ${this.name}`)
    // 输出：Hi, my name is tom
  }
}
person.sayHi()

// 改成箭头函数的方式
const person1 = {
  name: 'tom',
  sayHi: () => {
    console.log(`Hi, my name is ${this.name}`)
    // 输出：Hi, my name is undefined，因为箭头函数没有this机制，不会改变this指向
  }
}
person1.sayHi()

const person2 = {
  name: 'tom',
  sayHi: function () {
    setTimeout(function (){
      console.log(`Hi, my name is ${this.name1}`)
    },0)
    // 输出：Hi, my name is undefined，因为setTimeout会放在全局作用域去执行，这时不存在person对象的name属性
  }
}
person2.sayHi()

// 可以通过箭头函数修改
const person3 = {
  name: 'tom',
  sayHi: function () {
    setTimeout(() =>{
      console.log(`Hi, my name is ${this.name}`)
    },0)
    // 输出：Hi, my name is undefined，因为setTimeout会放在全局作用域去执行，这时不存在person对象的name属性
  }
}
person3.sayHi()
