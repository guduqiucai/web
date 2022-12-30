// 协同开发一个任务清单应用
// A 的代码：保存数据
const todos = {
  life: ['吃饭', '睡觉', '打豆豆'],
  learn: ['语文', '数学', '英语'],
  work: ['喝茶'],
  each: function (callback) {
    const all = [].concat(this.life, this.learn, this.work)
    for(const i of all) {
      callback(i)
    }
  },
  [Symbol.iterator]: function () {
    const all = [...this.life, ...this.learn, ...this.work]
    let index = 0
    return {
      next: function () {
        return {
          value: all[index],
          done: index++ >= all.length
        }
      }
    }
  }
}

// B的代码：展示数据
// 如果直接遍历，可以拿到
for(const i of todos.life) { console.log(i) }
for(const i of todos.learn) { console.log(i) }

// 但是如果A的数据结构发生变化，比如增加一个work项,那么B也要增加
for(const i of todos.work) { console.log(i) }

// 所以最好的办法是A的代码中提供一个迭代方法each,B只管拿值使用就行
todos.each((i) => console.log(i))

// 最后再使用迭代器的方式解决一下,实现[Symbol.iterator]方法
for(const i of todos) { console.log(i) }
