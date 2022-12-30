// Object
const obj = {}
obj[true] = 'value'
obj[123] = 'value'
obj[{a: 1}] = 'value'
console.log(Object.keys(obj))
// 输出：[ '123', 'true', '[object Object]' ]
// 可以看到是将所有的key进行了toString转换，如果我们的key是不同的对象，最后会变成相同的key，即为'[object Object]'
console.log(obj['[object Object]']) // value

// Map 的key必须是字符串，就可以避免以上问题
const m = new Map()
const tom = {name: 'tom'}
m.set(tom, 90)
console.log(m)
// 输出：Map(1) { { name: 'tom' } => 90 }
console.log(m.get(tom))
console.log(m.has(tom))
// m.clear()
// m.delete()
m.forEach((value, key) => console.log(key, value))
