module.exports = grunt => {
  // 返回false，标记是一个失败的任务
  grunt.registerTask('bad', () => {
    console.log('bad working')
    return false
  })
  grunt.registerTask('foo', () => {
    console.log('foo task')
  })
  grunt.registerTask('bar', () => {
    console.log('bar task')
  })
  // 异步任务标记需要失败的任务时，调用done(false)
  grunt.registerTask('bad-async', function (){
    const done = this.async()
    setTimeout(() => {
      console.log('bad async  working')
      done(false)
    })
  })
  // 失败的任务执行后，后面的任务不会再执行，除非加--force参数，强制继续执行
  grunt.registerTask('default', ['foo', 'bad', 'bar', 'bad-async'])
}
