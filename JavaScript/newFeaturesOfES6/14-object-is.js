console.log(
  0 == false,
  0 === false,
  +0 === -0,
  NaN === NaN
)
// true false true false

console.log(Object.is(+0, -0)) // false

console.log(Object.is(NaN, NaN)) // true
