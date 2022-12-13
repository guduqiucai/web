// 把一个字符串中的首字符提取并转换为大写，使用. 作为分隔
// world wild web => W. W. W
const fp = require('lodash/fp')

const upperFirstLetter = fp.flowRight(fp.join('. '), fp.map(fp.first), fp.map(fp.toUpper), fp.split(' '))
console.log(upperFirstLetter('world wild web'))
// 输出为：W. W. W    但是调用了两次map,数组遍历两次，优化一下

const upperFirstLetter2 = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))
console.log(upperFirstLetter2('world wild web'))