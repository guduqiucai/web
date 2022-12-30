// Symbol创建的值肯定是唯一的，无论传入的值是否相同
console.log(
  Symbol() === Symbol(),
  Symbol('foo') === Symbol('foo')
)
// false false

// Symbol 提供了for()方法，传入相同的字符串，返回的值相同，
// 如果传入的不是字符串，会使用toString转成字符串后传入，也就是说在for方法中，
// 传入数字10和字符串10得到的值也是相同的
const s1 = Symbol.for('foo')
const s2 = Symbol.for('foo')
console.log(s1 === s2) // true
console.log(Symbol.for(10) === Symbol.for('10')) // true

const obj = {
  [Symbol.toStringTag]: 'XObject'
}
console.log(obj.toString()) // [object XObject]

// 通过Symbol 定义的属性名在外面是拿不到的，所以更好的作为私有属性
const obj11 = {
  [Symbol()]: 'symbol value',
  'foo': 'normal value'
}

// 输出： foo
for (var key in obj11) {
  console.log(key)
}
console.log(Object.keys(obj11)) // 输出：[ 'foo' ]
console.log(JSON.stringify(obj11)) // 输出：{"foo":"normal value"}

// 可以通过以下方法获取属性为Symbol的属性名
console.log(Object.getOwnPropertySymbols(obj11)) // [ Symbol() ]

