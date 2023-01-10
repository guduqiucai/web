module.exports = grunt => {
  grunt.initConfig({
    clean: {
      // temp: 'src/1.html',
      temp: 'src/*.js',
      temp: 'src/**'
    }
  })
  grunt.loadNpmTasks('grunt-contrib-clean')
}
