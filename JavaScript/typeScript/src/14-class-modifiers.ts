export {}
class Person {
    // 必须先声明属性
    public name: string
    private age: number
    protected gender: boolean // 可以在子类中访问
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.gender = true
    }

    sayHi(msg: string): void {
        console.log(`I am ${this.name}, ${msg}`)
        console.log(this.age)
    }
}
const tom = new Person('tom', 18)
console.log(tom.name) // tom
// console.log(tom.age) // 无法访问
// console.log(tom.gender) // 无法访问

class Student extends Person {
    private constructor(name: string, age: number) {
        super(name, age)
        console.log(this.gender) // 可以访问
    }
    static create (name: string, age: number) {
        return new Student(name, age)
    }
}
// const jsck = new Student('jack', 20) 不能new，只能使用静态方法创建
const jack = Student.create('jack', 20)
