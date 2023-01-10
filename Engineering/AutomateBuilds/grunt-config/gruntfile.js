module.exports = grunt => {
  grunt.initConfig({
    'build': {
      // options为特殊键不会生成目标任务，是任务的配置选项
      options: {
        foo: 'bar'
      },
      css: '1',
      js: '2',
      ts: {
        options: {
          foo: 'baz'
        },
      }
    }
  })
  // 多目标模式，可以让任何任务根据配置形成多个子任务
  grunt.registerMultiTask('build', function() {
    console.log(this.options())
    console.log(`target: ${this.target}, data: ${this.data}`)
  })
}
