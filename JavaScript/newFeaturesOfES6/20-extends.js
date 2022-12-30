class Person {
  constructor(name) {
    this.name = name
  }
  say() {
    console.log(`Hi, ${this.name}`)
  }
}

class Student extends Person {
  constructor(name, number) {
    super(name)
    this.number = number
  }
  hello() {
    super.say()
    console.log(`my school number is ${this.number}`)
  }
}
let s = new Student('Tom', '96281')
s.hello()
