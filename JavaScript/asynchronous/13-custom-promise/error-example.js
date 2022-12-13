const promise = new Promise((resolve, reject) => {
    resolve('成功')
})

let p1 = promise.then(value => {
    console.log(value)
    return p1;
})
p1.then(() => {}, reason => {
    console.log(reason.message)
})