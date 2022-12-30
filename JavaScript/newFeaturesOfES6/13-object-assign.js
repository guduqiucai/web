const source1 = {
  a: 123,
  b: 123,
}

const source2 = {
  b: 789,
  d: 789
}

const target = {
  a: 456,
  c: 456
}

const res = Object.assign(target, source1, source2)
console.log(res === target) // true
console.log(target)

// 浅拷贝
let obj = {
  foo: {
    bar: {
      baz: 1
    }
  }
}

let objCopy = Object.assign({}, obj)
objCopy.foo.bar.baz = 2
console.log(obj, objCopy)

// 深拷贝
let obj1 = {
  foo: '11'
}

let objCopy1 = Object.assign({}, obj)
objCopy1.foo = '22'
console.log(obj1, objCopy1)
