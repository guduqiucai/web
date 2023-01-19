const marked = require('marked')
module.exports = source => {
  const html = marked.parse(source)
  // 方法一：直接导出包成js代码的html
  // 返回一个js字符串，可以使用commonjs的导出，也可以使用es module的导出
  // return `module.exports = ${JSON.stringify(html)}`
  // return `export default ${JSON.stringify(html)}`

  // 方法二：先导出html代码，然后交给下一个loader将它处理成js字符串,安装一个html-loader
  return html
}
