var obj1 = { x: 100 }
var obj2 = obj1
obj2['x'] = 200
var obj3 = obj1
obj3 = { name: 'zxc' }
console.log(obj1.x)
