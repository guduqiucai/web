const str = console.log`tagged template`
// 输出：[ 'tagged template' ]

const name = 'tom'
const gender = true

function myTagFunc(strings, name, gender) {
  console.log(strings)
  // 输出：[ 'hey, ', ' is a ', '' ]，是按照表达式分隔的静态内容
  console.log(name, gender)
  // 输出：tom true，可以得到差值表达式的返回值
  // 这种好处就是可以更方便的处理字符串中的变量，例如：
  const sex = gender ? 'man' : 'woman'
  return strings[0] + name + strings[1] + sex + strings[2]
}

const result = myTagFunc`hey, ${name} is a ${gender}`
console.log(result)
// 输出：hey, tom is a man
