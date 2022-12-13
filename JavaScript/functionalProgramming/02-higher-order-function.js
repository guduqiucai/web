// 函数作为返回值
function makeFn() {
  let msg = 'Hello Fn'
  return function () {
    console.log(msg)
  }
}

// const fn = makeFn()
// fn()
// 或者
makeFn()()

// once
function once(fn) {
  let done = false
  return function() {
    if(!done) {
      done = true
      return fn.apply(this, arguments)
    }
  }
}

let pay = once(function(money) {
  console.log(`支付： ${money}`)
})

pay(5)
pay(6)