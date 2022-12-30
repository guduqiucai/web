const s = new Set()
s.add(1).add(2).add(3).add(4).add(2)
console.log(s)
s.forEach(i => console.log(i))
for(let i of s) {
  console.log(i)
}
console.log('size:', s.size)
console.log(s.has(100))
console.log(s.delete(2))
s.clear()
console.log(s)

// 去重
const arr = [1, 2, 1, 3, 4]
const res = new Set(arr)
const arr1 = Array.from(res)
console.log(arr1)
// 展开运算符将Set转为Array
console.log([...res])
