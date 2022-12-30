// 之前函数式定义对象
function Person(name) {
  this.name = name
}

Person.prototype.say = function (){
  console.log(`Hi, ${this.name}`)
}

new Person('tom').say()

// 类方式定义
class PersonClass {
  constructor(name) {
    this.name = name
  }
  say() {
    console.log(`Hi, ${this.name}`)
  }
}
new PersonClass('jack').say()
