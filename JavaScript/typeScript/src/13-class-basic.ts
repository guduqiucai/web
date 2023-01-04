export {}
class Person {
    // 必须先声明属性
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${msg}`)
    }
}
