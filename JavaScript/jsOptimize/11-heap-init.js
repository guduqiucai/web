var obj1 = { x: 100 }
var obj2 = obj1
obj1.y = obj1 = { x: 200 }
console.log(obj1.y)
console.log(obj2)
