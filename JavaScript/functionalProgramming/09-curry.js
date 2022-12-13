// 柯里化演示
function checkAge(age) {
    let mini = 18
    return age >= mini
}

// 普通纯函数
function checkAge(mini, age) {
    return age >= mini
}
// 测试
console.log(checkAge(18, 20))
console.log(checkAge(18, 24))
console.log(checkAge(22, 24))

// 函数柯里化改造
function makeCheckAge(mini) {
    return function (age) {
        return age >= mini
    }
}
let checkAge18 = makeCheckAge(18)
let checkAge20 = makeCheckAge(20)
console.log(checkAge18(19))
console.log(checkAge20(19))

// es6箭头函数
let makeCheckAgeEs = mini => age => age >= mini;
let checkAgeEs18 = makeCheckAgeEs(18)
let checkAgeEs20 = makeCheckAgeEs(20)
console.log(checkAgeEs18(19))
console.log(checkAgeEs20(19))