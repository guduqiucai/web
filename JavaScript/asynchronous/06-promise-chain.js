let promise = new Promise(resolve => {
    console.log(1)
    resolve(1)
})
promise.then((v) => {
    console.log('2: ', v)
    return 2
}).then((v) => {
    console.log('3: ', v)
})

/* 输出为：
1
2:  1
3:  2
*/