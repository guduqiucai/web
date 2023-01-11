const fs = require("fs");
// 回调函数方式
exports.callback = done => {
  console.log('callback task~')
  done()
}

exports.callback_error = done => {
  console.log('callback task~')
  done(new Error('task failed'))
}

// Promise方式
exports.promise = () => {
  console.log('promise task~')
  return Promise.resolve()
}

exports.promise_error = () => {
  console.log('promise task~')
  return Promise.reject(new Error('task failed'))
}

// async-await只是promise的语法糖
const timeout = time => {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}
exports.async = async () => {
  await timeout(1000)
  console.log('async task~')
}

// 最常用的方式：stream
exports.stream = done => {
  const readStream = fs.createReadStream('package.json')
  const writeStream = fs.createWriteStream('temp.txt')
  readStream.pipe(writeStream)
  // return readStream 内部实现了下面的操作,两种写法都可以
  readStream.on('end', () => {
    done()
  })
}
