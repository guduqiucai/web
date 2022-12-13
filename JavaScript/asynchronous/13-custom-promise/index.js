/**
 * 1.Promise 就是一个类 在执行这个类的时候，需要传递一个执行器，执行器会立即执行
 * 2.Promise 有三种状态：成功fulfilled、失败rejected、等待pending。
 *  状态变化只有两种情况，且一旦确定就不可修改：
 *      pending -> fulfilled
 *      pending -> rejected
 * 3.resolve和reject函数是用来更改状态的
 *      resolve: fulfilled
 *      reject: rejected
 * 4.then方法内部做的事情就是判断状态，如果状态是成功，调用成功的回调函数，
 *  如果是失败，调用失败的回调函数。then方法是定义在原型对象上的方法
 * 5.then成功回调有一个参数，表示成功之后的值；then失败回调有一个参数，表示失败的原因
 * */

const myPromise = require('./myPromise')
let p = new myPromise((resolve, reject) => {
    reject('p reject')
})
p.then(value => console.log(value)).catch(reason => console.log(reason))

// function p1() {
//     return new myPromise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('p1')
//         }, 2000)
//     })
// }
//
// let p2 = new myPromise((resolve, reject) => {
//     resolve('p2 resolve')
//     // reject('p2 reject')
// })
// p2.finally(() => {
//     console.log('finally')
//     return p1();
// }).then(value => {
//     console.log(value)
// }, reason => {
//     console.log(reason)
// })


// myPromise.resolve(p2).then(value => console.log(value))
// myPromise.resolve(10).then(value => console.log(value))

// function p1() {
//     return new myPromise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('p1')
//         }, 2000)
//     })
// }
// function p2() {
//     return new myPromise((resolve, reject) => {
//         resolve('p2')
//     })
// }
// myPromise.all(['a', 'b', p1(), p2(), 'c']).then(value => {
//     console.log(value)
// })
