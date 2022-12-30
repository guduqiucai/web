const person = {
  name: 'tom',
  age: 18
}

const proxyPerson = new Proxy(person, {
  get(target, property) {
    // console.log(target, property)
    // return 100
    return property in target ? target[property] : 'default'
  },
  set(target, property, value) {
    // console.log(target, property, value)
    // 数据校验
    if(property === 'age') {
      if(!Number.isInteger(value)){
        throw new TypeError(`${property} is not an int `)
      }
    }
    target[property] = value
  }
})

console.log(proxyPerson.name) // tom
console.log(proxyPerson.name1) // default

proxyPerson.gender = true
console.log(proxyPerson)
proxyPerson.age = '20' // TypeError: age is not an int
