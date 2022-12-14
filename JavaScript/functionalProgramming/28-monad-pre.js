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

let cat = fp.flowRight(print, readFile)
let r = cat('package.json') // IO(IO(x))
console.log(r) // IO { _value: [Function (anonymous)] }
console.log(r._value()._value()) // 嵌套函子取值，看起来很麻烦