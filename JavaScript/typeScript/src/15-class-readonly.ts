export {}
class Person {
    // 必须先声明属性
    public name: string
    private age: number
    protected readonly gender: boolean // 只读属性
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
        this.gender = true
    }

    sayHi(msg: string): void {
        // this.gender = false // 提示只读属性不能修改
        console.log(`I am ${this.name}, ${msg}`)
        console.log(this.age)
    }
}
