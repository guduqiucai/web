const PENDING = 'pending';  // 等待
const FULFILLED = 'fulfilled';  // 成功
const REJECTED = 'rejected';  // 失败
class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }
    static resolve (value) {
        if (value instanceof MyPromise) {
            return value
        } else {
            return new Promise(resolve => resolve(value))
        }
    }
    static all(array) {
        let result = [];
        let index = 0
        return new MyPromise((resolve, reject) => {
            function addData (key, value) {
                result[key] = value
                index++;
                if(index === array.length) {
                    resolve(result)
                }
            }
            for (let i = 0; i < array.length; i++) {
                let current = array[i];
                if (current instanceof MyPromise) {
                    // Promise对象
                    current.then(value => addData(i, value), reason => reject(reason))
                } else {
                    // 普通值
                    addData(i, array[i])
                }
            }
        })
    }
    // promise 状态
    status = PENDING;
    // 成功之后的值
    value = undefined;
    // 失败后的原因
    reason = undefined;
    // 成功回调
    successCallback = [];
    // 失败回调
    failCallback = [];
    resolve = value => {
        // 如果状态不是等待，阻止程序向下执行
        if (this.status !== PENDING) return
        // 将状态改为成功
        this.status = FULFILLED;
        // 保存成功之后的值
        this.value = value
        // 判断成功回调是否存在，如果存在就调用
        while (this.successCallback.length)  this.successCallback.shift()(this.value)
        // this.successCallback && this.successCallback(value)
    }
    reject = reason => {
        // 如果状态不是等待，阻止程序向下执行
        if (this.status !== PENDING) return
        // 将状态改为失败
        this.status = REJECTED;
        // 保存失败后的原因
        this.reason = reason
        // 判断失败回调是否存在，如果存在就调用
        while (this.failCallback.length)  this.failCallback.shift()(this.reason)
        // this.failCallback && this.failCallback(reason)
    }
    then (successCallBack, failCallBack) {
        successCallBack = successCallBack ? successCallBack : value => value
        failCallBack = failCallBack ? failCallBack : reason => { throw reason }
        let promise2 = new MyPromise((resolve, reject) => {
            // 判断状态
            if (this.status === FULFILLED) {
                // 这里需要放在setTimeout中，是因为promise2需要等待new MyPromise执行完成后才能得到值
                setTimeout(() => {
                    try {
                        let x = successCallBack(this.value)
                        // 判断x的值是普通值，还是promise对象
                        // 如果是普通值，直接调用resolve
                        // 如果是promise对象，根据promise对象返回的结果，
                        // 决定调用resolve,还是调用reject
                        resolvePromise(x, resolve, reject, promise2)
                    } catch (e) {
                        reject(e);
                    }
                }, 0)
            } else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = failCallBack(this.reason)
                        resolvePromise(x, resolve, reject, promise2)
                    } catch (e) {
                        reject(e);
                    }
                }, 0)
            } else {
                // 等待状态
                // 将成功回调和失败回调保存
                this.successCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = successCallBack(this.value)
                            resolvePromise(x, resolve, reject, promise2)
                        } catch (e) {
                            reject(e);
                        }
                    }, 0)
                });
                this.failCallback.push(() => {
                    setTimeout(() => {
                        try {
                            let x = failCallBack(this.reason)
                            resolvePromise(x, resolve, reject, promise2)
                        } catch (e) {
                            reject(e);
                        }
                    }, 0)
                });
            }
        });
        return promise2;
    }
    finally (callback) {
        return this.then(value => {
            return MyPromise.resolve(callback()).then(() => value)
        }, reason => {
            return MyPromise.resolve(callback()).then(() => {
                throw reason;
            })
        })
    }
    catch (failCallback) {
        this.then(undefined, failCallback)
    }
}

function resolvePromise(x, resolve, reject, promise2) {
    if(promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
    }
    if(x instanceof MyPromise) {
        // promise对象
        // x.then(value => resolve(value), reason => reject(reason))
        // 简化
        x.then(resolve, reject)
    } else {
        // 普通值
        resolve(x)
    }
}

module.exports = MyPromise;