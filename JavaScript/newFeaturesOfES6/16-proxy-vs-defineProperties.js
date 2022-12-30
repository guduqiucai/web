// 监视对象
const person = {
  name: 'aa',
  age: 18
}

// 可以监听到删除属性操作
const proxyPerson = new Proxy(person, {
  deleteProperty(target, p) {
    console.log('delete', p)
    delete target[p]
  }
})

delete proxyPerson.age
console.log(person)

// 监视数组
const list = []
const listProxy = new Proxy(list, {
  set(target, property, value) {
    console.log('set', property, value)
    target[property] = value
    return true // 表示设置成功
  }
})
listProxy.push(100)
