const _ = require('lodash')
// 将数组中的字符串转为整数
console.log(_.map(['11', '22', '33'], parseInt))
// 输出为[ 11, NaN, NaN ] ，原因是map传给的给第二个参数，也就是parseInt的值
// 为 (value, index, collection),也就是：('11', 0, ['11', '22', '33'])、
// ('22', 1, ['11', '22', '33'])、('33', 2, ['11', '22', '33'])，而
// parseInt接收两个参数(string, radix)，字符串和进制（限制为2-36，为0的时候转为
// 十进制），所以第二个是NaN，第三个是因为2进制的范围是[0-1],所以不能识别

const fp = require('lodash/fp')
console.log(fp.map(parseInt, ['11', '22', '33']))
// 输出为：[ 11, 22, 33 ]，正常显示，这是因为fp的map方法中传给第一个参数，也就是
// parseInt的值只有一个value, parseInt接收两个参数(value, radix)，后面的进制省略
// 默认为十进制