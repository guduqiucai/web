const fp = require('lodash/fp')
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

let r = IO.of(process).map(p => p.execPath)
console.log(r)
// IO { _value: [Function (anonymous)] }
console.log(r._value())
// D:\Program Files\nodejs\node.exe
