// 案例1：发号器
function * createIdMaker () {
  let id = 1
  while (true) {
    yield id++
  }
}

const idMaker = createIdMaker()
console.log(idMaker.next().value) // 1
console.log(idMaker.next().value) // 2
console.log(idMaker.next().value) // 3
console.log(idMaker.next().value) // 4

// 案例2：使用Generator 函数实现Iterable方法，修改之前的示例
const todos = {
  life: ['吃饭', '睡觉', '打豆豆'],
  learn: ['语文', '数学', '英语'],
  work: ['喝茶'],
  [Symbol.iterator]: function * () {
    const all = [...this.life, ...this.learn, ...this.work]
    // let index = 0
    // return {
    //   next: function () {
    //     return {
    //       value: all[index],
    //       done: index++ >= all.length
    //     }
    //   }
    // }
    // 优化
    for(const i of all) {
      yield i
    }
  }
}
for(const i of todos) { console.log(i) }
