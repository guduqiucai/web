const obj = {
  foo: '123',
  bar: '456'
}

const proxy = new Proxy(obj, {
  get(target, p) {
    console.log('watch logic~')
    return Reflect.get(target, p)
  }
})
console.log(proxy.bar)

// 示例
const person = {
  name: 'tom',
  age: 18
}

// 之前的这些操作方法和操作符后续可能废弃，统一使用Reflect的方式
// console.log(
//   'name' in person,
//   delete person['age'],
//   Object.keys(person)
// )

// Reflect 方式
console.log(
  Reflect.has(person, 'name'),
  Reflect.deleteProperty(person, 'age'),
  Reflect.ownKeys(person)
)


