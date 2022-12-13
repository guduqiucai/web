function getSum(a, b, c) {
    return a + b + c
}

// 模拟
function curry(func) {
    return function curried (...args) {
        // 使用func.length可以取到传入的函数参数的个数
        if(args.length < func.length){
            return function () {
                return curried(...args.concat(Array.from(arguments)))
            }
        }
        return func(...args)
    }
}

const curryGetSum = curry(getSum)
console.log(curryGetSum(1, 2, 3))
console.log(curryGetSum(1)(2, 3))
console.log(curryGetSum(1, 2)(3))