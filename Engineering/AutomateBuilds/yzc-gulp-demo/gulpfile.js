const { src, dest, parallel, series, watch } = require('gulp')
// 可以加载所有的gulp插件
const loadPlugins = require('gulp-load-plugins')

// 删除文件
const del = require('del')
const clean = () => {
 return del(['dist', 'temp'])
}

// 使用plugins.babel()
const plugins = loadPlugins()
const sass = require('gulp-sass')(require('sass'));
const style = () => {
 return src('src/assets/styles/*.scss', { base: 'src' })
   .pipe(sass())
   .pipe(dest('temp'))
   .pipe(bs.reload({ stream: true }))
}

// const babel = require('gulp-babel')
const script = () => {
 return src('src/assets/scripts/*.js', { base: 'src' })
   .pipe(plugins.babel({ presets: ['@babel/preset-env'] }))
   .pipe(dest('temp'))
   .pipe(bs.reload({ stream: true }))
}

// const swig = require('gulp-swig')
const data = {
 menus: [
  {
   name: 'Home',
   icon: 'aperture',
   link: 'index.html'
  },
  {
   name: 'Features',
   link: 'features.html'
  },
  {
   name: 'About',
   link: 'about.html'
  },
  {
   name: 'Contact',
   link: '#',
   children: [
    {
     name: 'Twitter',
     link: 'https://twitter.com/w_zce'
    },
    {
     name: 'About',
     link: 'https://weibo.com/zceme'
    },
    {
     name: 'divider'
    },
    {
     name: 'About',
     link: 'https://github.com/zce'
    }
   ]
  }
 ],
 pkg: require('./package.json'),
 date: new Date()
}
const page = () => {
 // 如果子目录下也有需要编译的html文件，使用/src/**/*.html
 return src('src/*.html', { base: 'src' })
   .pipe(plugins.swig({ data: data }))
   .pipe(dest('temp'))
   .pipe(bs.reload({ stream: true }))
}

// const imagemin = require('gulp-imagemin')
// 图片
const image = () => {
 return src('src/assets/images/**', { base: 'src' })
   .pipe(plugins.imagemin())
   .pipe(dest('dist'))
}
// 字体
const font = () => {
 return src('src/assets/fonts/**', { base: 'src' })
   .pipe(plugins.imagemin())
   .pipe(dest('dist'))
}

// 其他文件
const extra = () => {
 return src('public/**', { base: 'public' })
   .pipe(dest('dist'))
}

const browserSync = require('browser-sync')
const bs = browserSync.create()
const serve = () => {
 // gulp提供的watch方法，解构出来就可以使用，第一个参数是路径，第二个参数是变化后执行的任务
 watch('src/assets/styles/*.scss', style)
 watch('src/assets/scripts/*.js', script)
 watch('src/*.html', page)
 // watch('src/assets/images/**', image)
 // watch('src/assets/fonts/**', font)
 // watch('public/**', extra)
 // 优化一下，下面三个路径中的文件变化，引起浏览器重新请求资源
 watch([
  'src/assets/images/**',
  'src/assets/fonts/**',
  'public/**'
 ], bs.reload)

 bs.init({
  notify: false,
  port: 2080,
  open: false,
  // ，这个配置也可以在每个任务执行完写入后调用.pipe(bs.reload({ stream: true }))方式代替
  // files: 'dist/**', // 监听的路径通配符
  server: {
   // 按照顺序依次查找文件
   baseDir: ['temp', 'src', 'public'],
   routes: {
    // 映射
    '/node_modules': 'node_modules',
   }
  }
 })
}

const useref = () => {
 return src('temp/*.html', { base: 'temp'})
   .pipe(plugins.useref({ searchPath: ['temp', '.'] }))
   // 会有三种情况的文件：html js css 分别压缩
   .pipe(plugins.if(/\.html$/, plugins.htmlmin({
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true
   })))
   .pipe(plugins.if(/\.js$/, plugins.uglify()))
   .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
   // 避免文件写入冲突，加个中转站
   .pipe(dest('dist'))
}

// compile处理需要编译的文件,image, font, extra开发阶段没有执行的必要，所以放在build中
const compile = parallel(style, script, page)
// 上线之前执行的任务
const build = series(clean, parallel(series(compile, useref), image, font, extra))
const develop = series(compile, serve)

module.exports = {
 build,
 develop,
 clean
}
