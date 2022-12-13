class MayBe {
    static of(value){
        return new MayBe(value)
    }
    constructor(value) {
        this._value = value
    }
    map(fn) {
        return this.isNoting() ? MayBe.of(null) : MayBe.of(fn(this._value))
    }
    isNoting() {
        return this._value === null || this._value === undefined
    }
}

const g = MayBe.of('Hello World').map(x => x.toUpperCase())
console.log(g)
// MayBe { _value: 'HELLO WORLD' }

const f = MayBe.of(null).map(x => x.toUpperCase())
console.log(f)
// MayBe { _value: null } 解决了输入是null的问题

const h = MayBe.of('Hello World')
    .map(x => x.toUpperCase())
    .map(x => null)
    .map(x => x.split(' '))
console.log(h)
// MayBe { _value: null } 不会报错，但是有问题，不知道哪个环节返回的null

