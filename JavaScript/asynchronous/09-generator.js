// 比普通函数多一个*
function * foo (){
    console.log('start')
}
// 调用后不会立即执行
const r = foo()
// 执行next()方法后才会向下执行
r.next()

function * foo1 (){
    // yield后面的值，可以通过执行到这一步的next()返回值得到
    yield 'bar'
}
const r1 = foo1()
const bar = r1.next()
console.log(bar)

function * foo2 (){
    // 这里可以获取到下一步的next()中传入的值
    const res = yield 'bar'
    console.log('res: ', res)
}
const r2 = foo2()
r2.next()
r2.next('ba1')
console.log(bar)
