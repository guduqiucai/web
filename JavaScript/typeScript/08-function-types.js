// @flow
// 限制回调函数的类型
function foo(callback: (string, number) => void) {
    callback('string', 100)
} 
// 正确调用
foo(function(str, n) {})
// 错误调用
foo(function(str, n){ return 100 })