const _ = require('lodash')

const lastUpper = _.flowRight(_.toUpper, _.first, _.reverse)
console.log(lastUpper(['one', 'two', 'three']))

const lastUpper1 = _.flowRight(_.flowRight(_.toUpper, _.first), _.reverse)
console.log(lastUpper1(['one', 'two', 'three']))

const lastUpper2 = _.flowRight(_.toUpper, _.flowRight(_.first, _.reverse))
console.log(lastUpper2(['one', 'two', 'three']))