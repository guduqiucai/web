// 演示 1odash
// first / last / toUpper / reverse / each / includes / find / findIndex
const _ = require('lodash')

const array = ['jack', 'tom', 'lucy', 'kate']

console.log(_.first(array))
console.log(_.last(array))
console.log(_.toUpper(_.first(array)))
console.log(_.reverse(array))
const r = _.each(array, (item, index) => {
    console.log(item, index)
})
console.log(r)
console.log(_.includes(array, 'jack1'))
console.log(_.find(array, null,2))
console.log(_.findIndex(array, o => o === 'tom' ))
