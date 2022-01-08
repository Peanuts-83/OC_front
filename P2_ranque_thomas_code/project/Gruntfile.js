module.exports = function (grunt) {
  grunt.initConfig({
      autoprefixer: {
          dist: {
              files: {
                  './dev/css/style.css': './src/css/style.css'
              }
          }
      },
      watch: {
          styles: {
              files:  ['./src/css/style.css'],
              tasks: ['autoprefixer'],
          }
      },
      copy: {
        files: {
          cwd: './src/',
          src: '**/*',
          dest: './dev/',
          expand: true
        }
      }
  });
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['copy', 'watch']);
  };