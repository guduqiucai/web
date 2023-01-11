// gulp提供的文件操作api相对于node的api更方便更强大
const { src, dest } = require('gulp')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')

exports.default = () => {
  // return src('src/normalize.css')
  //   .pipe(dest('dist'))

  // 可以使用通配符, src文件读取流，dest文件写入流
  return src('src/*.css')
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
}
