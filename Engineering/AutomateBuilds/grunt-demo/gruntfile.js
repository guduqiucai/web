const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')
module.exports = grunt => {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap:true,
        implementation: sass
      },
      main: {
        files: {
          // 键是目标文件，值是需要编译的源文件
          'dist/css/main.css': 'src/scss/main.scss'
        }
      }
    },
    babel: {
      options: {
        presets:['@babel/preset-env'],
        sourceMap: true
      },
      main: {
        files: {
          'dist/js/app.js': 'src/js/app.js'
        }
      }
    },
    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['babel']
      },
      css: {
        files: ['src/scss/*.scss'],
        tasks: ['sass']
      },
    }
  })
  // grunt.loadNpmTasks('grunt-sass')
  loadGruntTasks(grunt) // 自动加载所有的 grunt 插件中的任务

  // 确保启动的时候先执行一次
  grunt.registerTask('default', ['sass', 'babel', 'watch'])
}
