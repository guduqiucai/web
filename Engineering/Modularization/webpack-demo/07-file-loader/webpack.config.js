const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    // 因为图片资源打包到了dist目录下，所以需要设置该路径，默认为空，也就是项目根目录
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
      test: /.css$/,
      use: [
        'style-loader',
        'css-loader'
        ]
      },
      {
        test: /.png$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}
