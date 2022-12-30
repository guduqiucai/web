class Person {
  constructor(name) {
    this.name = name
  }
  say() {
    console.log(`Hi, ${this.name}`)
  }
  static create(name) {
    return new Person(name)
  }
}
Person.create('jack').say()
