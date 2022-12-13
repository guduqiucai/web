// 函子
class Container {
    constructor(value) {
        this._value = value
    }
    map (fn) {
        return new Container(fn(this._value))
    }
}

const r = new Container(3)
.map(x => x + 1)
.map(x => x * x)

console.log(r)
// 输出为Container { _value: 16 }

// 改造，不使用new去创建使用
class ContainerNew {
    static of(value) {
        return new ContainerNew(value)
    }

    constructor(value) {
        this._value = value
    }
    map (fn) {
        return ContainerNew.of(fn(this._value))
    }
}

const s = ContainerNew.of(5)
    .map(x => x + 1)
    .map(x => x * x)
console.log(s)

const t = Container.of(null)
    .map(x => x.toUpperCase())
console.log(t)
// 输出 TypeError: Container.of is not a function
// 对于 输入值的null undefined的情况，可以使用MayBe函子