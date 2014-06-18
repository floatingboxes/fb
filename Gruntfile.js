module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/build/'
        }]
      }
    },

    sass: {
      dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'css/styles.css': 'css/styles.sass'
        }
      }
    },

    jekyll: {
      dist: {
        serve: true
      }
    },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['css/*.sass'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },
      jekyll: {
        files: ['./*'],
        tasks: ['jekyll'],
        options: {
          spawn: false,
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jekyll');

  grunt.registerTask('default', ['imagemin', 'sass', 'jekyll', 'watch']);

};