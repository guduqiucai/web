Function.prototype.myCall = function (context, ...rest) {
    context.fun = this
    const r = context.fun(...rest)
    delete context.fun
    return r
}

function add(a, b, c) {
    console.log(this)
    return a + b + c;
}

console.log(add.myCall({ name: 'changedThis' }, 1, 2, 3))
