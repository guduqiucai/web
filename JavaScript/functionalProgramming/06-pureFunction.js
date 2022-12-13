let array = [1, 2, 3, 4, 5]
// 结果相同，纯函数slice
console.log(array.slice(0, 3)) // [ 1, 2, 3 ]
console.log(array.slice(0, 3)) // [ 1, 2, 3 ]
console.log(array.slice(0, 3)) // [ 1, 2, 3 ]

// 结果不同，不纯函数splice
console.log(array.splice(0, 3)) // [ 1, 2, 3 ]
console.log(array.splice(0, 3)) // [ 4, 5 ]
console.log(array.splice(0, 3)) // []

// 纯函数
function getSum (n1, n2) {
    return n1 + n2
}
// 测试
console.log(getSum(1, 2)) // 3
console.log(getSum(1, 2)) // 3
console.log(getSum(1, 2)) // 3