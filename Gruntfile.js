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
            // style: 'compressed'
        },
        files: {
            './src/css/styles.css': './src/css/styles.sass'
        }
      }
    },

    jekyll: {
      server: {
          options: {
            src: './src',
            dest: './build/dev',
            serve: true,
            port: 4000,
            auto: true
          }
      },
      dev: {
        options: {
          src: './src',
          dest: './build/dev'
        }
      },
      prod: {
        options: {
          src: './src',
          dest: '../fb-prod'
        }
      }
    },

    watch: {
      css: {
        files: ['./src/css/**/*.sass'],
        tasks: ['sass', 'autoprefixer'],
        options: {
          spawn: false,
        }
      },
      jekyll: {
        files: ['./src/**/*.html', './src/**/*.css'],
        tasks: ['jekyll:dev'],
        options: {
          spawn: false,
        }
      }
    },
    concurrent: {
      dev: {
        tasks: ['watch', 'jekyll:server'],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    autoprefixer: {
      target: {
        src: './src/css/*.css'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('dev', ['sass', 'autoprefixer', 'concurrent:dev']);
  grunt.registerTask('prod', ['sass', 'autoprefixer', 'jekyll:prod']);

};