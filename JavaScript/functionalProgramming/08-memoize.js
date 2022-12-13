// 记忆函数
const _ = require('lodash')

function getArea(r) {
    console.log(r) // 发现只会走一次，表示结果已经缓存
    return Math.PI * r * r
}

let getAreaWithMemory = _.memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))

// 模拟memoize方法的实现
function memoize(f) {
    let cache = {}
    return function () {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || f.apply(f, arguments)
        return cache[key]
    }
    }
let getAreaWithMemory1 = memoize(getArea)
console.log(getAreaWithMemory1(4))
console.log(getAreaWithMemory1(4))
console.log(getAreaWithMemory1(4))