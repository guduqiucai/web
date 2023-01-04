export {}
function stringify(value: any) {
    return JSON.stringify(value)
}

stringify(100)
stringify('string')
stringify(true)
let foo: any = 'string'
foo = 100
foo.bar()
