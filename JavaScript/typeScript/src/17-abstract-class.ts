export {}
abstract class Animal {
    eat(food: string): void {
        console.log(`呼噜呼噜的吃${food}`)
    }
    abstract run(distance: number):void
}

class Dog extends Animal {
    run(distance: number): void {
        console.log(`爬行${distance}`)
    }
}

const d = new Dog()
d.eat('肉')
d.run(100)
