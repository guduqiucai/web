// 高阶函数-函数作为参数
function forEach(arr, fn){
  for(let i = 0; i < arr.length; i++){
    fn(arr[i])
  }
}

// 测试
let arr = [1, 3, 4, 6, 5]
forEach(arr, function(item){
  console.log(item)
})

// filter
function filter (arr, fn){
  let result = []
  for(let i = 0; i < arr.length; i++) {
    if (fn(arr[i])){
      result.push(arr[i])
    }
  }
  return result
}

// 测试
let arr1 = [1, 3, 4, 6, 5]
let r = filter(arr1, function(item) {
  return item % 2 === 0
})
console.log(r)