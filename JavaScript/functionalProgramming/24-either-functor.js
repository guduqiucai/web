class Left {
    static of(value) {
        return new Left(value)
    }
    constructor(value) {
        this._value = value
    }
    map(fn) {
        return this
    }
}

class Right {
    static of(value) {
        return new Right(value)
    }
    constructor(value) {
        this._value = value
    }
    map(fn) {
        return Right.of(fn(this._value))
    }
}

let r1 = Right.of(12).map(x => x + 2)
let l1 = Left.of(12).map(x => x + 2)
console.log(r1)
console.log(l1)

function parseJSON (str) {
    try{
        return Right.of(JSON.parse(str))
    } catch (e) {
        return Left.of({ error: e.message })
    }
}
let r = parseJSON('{ "name": "Tom" }')
console.log(r)
// 输出为： Right { _value: { name: 'Tom' } }

let l = parseJSON('{ name: Tom }')
console.log(l)
// 输出为： Left { _value: { error: 'Unexpected token n in JSON at position 2' } }

let m = parseJSON('{ "name": "Tom" }').map( x => x.name.toUpperCase())
console.log(m)
// 输出为： Right { _value: 'TOM' }