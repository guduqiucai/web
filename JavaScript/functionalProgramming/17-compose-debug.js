// NEVER SAY DIE => never-say-die
// 先用空格分割，再转为小写，最后用-拼接
const _ = require('lodash')

// _.split(string, separator, limit)  最后一个参数可不填，因为函数组合的参数必须是一个，
// 所以使用函数柯里化curry包裹，可以在调用时，先指定一个参数，返回只有一个参数的函数，而且我们
// 想先传入第二个参数，所以要交换参数顺序
const split = _.curry((sep, str) => _.split(str, sep))

// _.toLower(str) 参数只有一个，可以直接使用

// _.join(array, separator) 同样需要柯里化，并且交换参数顺序
const join = _.curry((sep, arr) => _.join(arr, sep))

const f = _.flowRight(join('-'), _.toLower, split(' '))
console.log(f('NEVER SAY DIE'))
// 结果为：n-e-v-e-r-,-s-a-y-,-d-i-e，不是预期结果，写一个log函数进行调试
const log = v => {
    console.log(v)
    return v
}

_.chunk()

const f1 = _.flowRight(join('-'), _.toLower, log, split(' '))
console.log(f1('NEVER SAY DIE'))
// log函数输出为：[ 'NEVER', 'SAY', 'DIE' ]，是预期结果，在调试下一个

const f2 = _.flowRight(join('-'), log, _.toLower, split(' '))
console.log(f2('NEVER SAY DIE'))
// log函数输出为：never,say,die 不是预期的数组形式，所以要使用map函数修改

// _.map(arr, fn) 两个参数，需要柯里化处理才能组合
const map = _.curry((fn, arr) => _.map(arr, fn))

const f3 = _.flowRight(join('-'), map( _.toLower), split(' '))
console.log(f3('NEVER SAY DIE'))
// log函数输出为：never-say-die 为预期结果，如果我们同时组合两个log函数，
// 输出会不清晰，所以改造log函数为trace函数

const trace = _.curry((tag, v) =>{
    console.log(`${tag}: ${v}`)
    return v
})
const f4 = _.flowRight(join('-'), trace('map 之后'), map( _.toLower), trace('split 之后'), split(' '))
console.log(f4('NEVER SAY DIE'))

