const str = `hello \'template string\'`
console.log(str)

// 支持换行
const str1 = `
    hello
    \' template string \'
`
console.log(str1)

// 支持插值表达式在字符串中嵌入变量的值
const name = 'template'
const str2 = `hello '${name} string'`
console.log(str2)
