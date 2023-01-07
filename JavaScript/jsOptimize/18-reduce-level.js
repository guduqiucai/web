function Person() {
  this.name = 'zxc'
  this.age = 40
}
let p1 = new Person()
console.log(p1.age)

function Person() {
  this.name = 'zxc'
  this.age = 40
  this.getAge = function () {
    return this.age
  }
}
let p1 = new Person()
console.log(p1.getAge())
