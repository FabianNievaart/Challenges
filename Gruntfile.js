module.exports = function(grunt) {
    // Add configuration, tasks and plugins here
    grunt.initConfig({

        // imports the config data from the package.json
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                files: {
                    'assets/css/styles.css': ['assets/sass/style.scss']
                }
            }
        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'assets/css/',
                    ext: '.min.css',
                }]
            }
        },
        watch: {
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'cssmin']
            }
        }

    });

// Load the Grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

// Register the default tasks.
    grunt.registerTask('default', ['sass', 'cssmin', 'watch']);

};
