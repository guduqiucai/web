// 定义一个 02-primitive-types.ts 中定义过的变量
// const a: number = 100

// 解法一: 放在一个立即执行的函数中
(function () {
    const a: number = 100
})()

// 解法二：使用ES Modules
export {}
const a: string = '200'
