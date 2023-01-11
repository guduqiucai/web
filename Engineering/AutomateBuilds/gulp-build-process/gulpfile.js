const fs = require("fs");
const { Transform } = require('stream')

exports.default = () => {
  // 文件读取流
  const read = fs.createReadStream('normalize.css')
  // 文件写入流
  const write = fs.createWriteStream('normalize.min.css')
  // 文件转化流
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      // 核心转换过程实现
      // chunk => 读取流中读取到的内容（Buffer）
      const input = chunk.toString()
      const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '')
      callback(null, output)
    }
  })
  // 把读取出来的内容 => 转换 => 写入到目标文件中
  read.pipe(transform).pipe(write)
  return read
}
