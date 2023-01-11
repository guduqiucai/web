// gulp 的入口文件
exports.foo = done =>{
  console.log('foo task working~')
  done()
}

exports.default = done => {
  console.log('default task working~')
  done()
}
// gulp 4.0之前的用法，不推荐
const gulp = require('gulp')
gulp.task('bar', done => {
  console.log('bar working~')
  done()
})
