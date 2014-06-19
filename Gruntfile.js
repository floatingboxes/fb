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
      server: {
          options: {
            serve: true,
            port: 4000,
            auto: true
          }
      },
      dev: {

      }
    },

    watch: {
      css: {
        files: ['css/*.sass'],
        tasks: ['sass'],
        options: {
          spawn: false,
        }
      },
      jekyll: {
        files: ['./**/*.html', './**/*.css'],
        tasks: ['jekyll:dev'],
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


  grunt.registerTask('serve', ['jekyll:server']);
  grunt.registerTask('dev', ['sass', 'jekyll:dev', 'watch']);

};