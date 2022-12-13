let promise1 = new Promise(resolve => {
    console.log(1)
    resolve(1)
})
// promise1.then((v) => {
//     console.log('2: ', v)
//     return 2
// }).then((v) => {
//     throw Error('error message')
//     console.log('3: ', v)
// }, err => {
//     console.log(err)
// })

promise1.then((v) => {
    console.log('2: ', v)
    return 2
}).then((v) => {
    throw Error('error message')
    console.log('3: ', v)
}).catch(err => {
    console.log('error message')
})