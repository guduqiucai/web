// IO 函子的问题
const fp = require('lodash/fp')
const fs = require('fs')
class IO {
    static of(value) {
        return new IO(function (){
            return value
        })
    }
    constructor(fn) {
        this._value = fn
    }
    map(fn) {
        return new IO(fp.flowRight(fn, this._value))
    }
    // 增加join 方法，monad 函子
    join() {
        return this._value()
    }
    flatMap(fn){
        return this.map(fn).join()
    }
}
let readFile = function (filename) {
    return new IO(function (){
        return fs.readFileSync(filename, 'utf-8')
    })
}
let print = function (x) {
    return new IO(function(){
        console.log(x)
        return x
    })
}

// let cat = fp.flowRight(print, readFile)
// let r = cat('package.json') // IO(IO(x))
// console.log(r) // IO { _value: [Function (anonymous)] }
// console.log(r._value()._value()) // 嵌套函子取值，看起来很麻烦

// 改造后的调用
let r = readFile('package.json')
    // .map(x => x.toUpperCase())
    // .map(fp.toUpper)
    .flatMap(print)
    .join()
console.log(r)