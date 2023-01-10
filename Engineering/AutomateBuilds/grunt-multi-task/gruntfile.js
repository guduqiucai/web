module.exports = grunt => {
  grunt.initConfig({
    foo: 'bar',
    yzc: {
      qq: '123'
    }
  })
  grunt.registerTask('foo', () => {
    console.log(grunt.config('foo'))
    console.log(grunt.config('yzc.qq'))
  })
}
