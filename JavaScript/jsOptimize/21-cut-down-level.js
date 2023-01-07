
function doSomeThing(part, chapter) {
  const parts=['ES2016', '工程化', 'React', 'Node']
  if(part) {
    if(parts.includes(part)){
      console.log('属于当前前端课程')
      if(chapter > 5) {
        console.log('您需要提供VIP身份')
      }
    }
  } else {
    console.log('请确认模块信息')
  }
}
doSomeThing('ES2016', 6)

// 优化
function doSomeThing(part, chapter) {
  const parts=['ES2016', '工程化', 'React', 'Node']
  if(!part) {
    console.log('请确认模块信息')
    return
  }
  if(!parts.includes(part)) return
  console.log('属于当前前端课程')
  if(chapter > 5) {
    console.log('您需要提供VIP身份')
  }
}
doSomeThing('ES2016', 6)

