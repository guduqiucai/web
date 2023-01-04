export {}

// 建议每个接口实现一种能力
// interface EatAndRun {
//     eat(food: string): void
//     run(distance: number): void
// }
interface Run {
    run(distance: number): void
}
interface Eat {
    eat(food: string): void
}

class Person implements Eat, Run {
    eat(food: string): void {
        console.log(`优雅的进餐：${food}`)
    }
    run(distance: number) {
        console.log(`直立行走：${distance}`)
    }
}
class Animal implements Eat, Run {
    eat(food: string): void {
        console.log(`呼噜呼噜的吃：${food}`)
    }
    run(distance: number) {
        console.log(`爬行：${distance}`)
    }
}
