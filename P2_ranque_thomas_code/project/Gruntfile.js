module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            main:
            {
                expand: true,
                cwd: './src',
                src: [
                    '**',
                    '!**/*.css'
                ],
                dest: './dev/'
            }

        },
        autoprefixer: {
            dist: {
                files: {
                    './dev/css/header.css': './src/css/header.css',
                    './dev/css/form.css': './src/css/form.css',
                    './dev/css/section.css': './src/css/section.css',
                    './dev/css/footer.css': './src/css/footer.css',
                }
            }
        },
        watch: {
            styles: {
                files: ['./src/css/*.css', '!./src/css/style.css', '!normalize.css'],
                tasks: ['autoprefixer'],
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['copy', 'watch']);
};