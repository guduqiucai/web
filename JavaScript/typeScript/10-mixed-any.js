// @flow
// mixed也就是所有类型的联合类型：string|number|boolean|......
// 强类型
function passMixed(value: mixed) {
    value.substr(1)
    value * value
}
// 解决办法
function passMixed2(value: mixed) {
    if (typeof value === 'string') {
        value.substr(1)
    }
    if (typeof value === 'number'){
        value * value
    }
}
passMixed('string')
passMixed(100)

// any也是所有类型的联合类型：string|number|boolean|......
// 弱类型
function passAny(value: any) {
    value.substr(1)
    value * value
}
passAny('string')
passAny(100)