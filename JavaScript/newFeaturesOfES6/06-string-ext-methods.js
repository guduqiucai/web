const message = 'Error: foo is not defined.'

console.log(
  message.startsWith('Error'),
  message.endsWith('.'),
  message.includes('foo')
)
// 输出：true true true
