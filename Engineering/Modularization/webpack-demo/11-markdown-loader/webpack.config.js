const path = require('path')
module.exports = {
  mode: 'none',
  // 指定入口文件
  entry: './src/main.js',
  output: {
    // 生成文件的名称
    filename: 'bundle.js',
    // 生成文件所在目录，必须是绝对路径
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /.md$/,
        // 数组时，执行顺序是从后往前执行
        use: [
          'html-loader',
          './markdown-loader'
        ]
      }
    ]
  }
}
