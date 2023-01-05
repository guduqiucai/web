let obj = {name: 'xm'}

let ali = obj

obj = null
console.log(ali.name)
// 输出为：xm
