module.exports = {

  // Watch for file changes and refresh browser with livereload
  options: {
    livereload: true,
    spawn: false
  },
  partials: {
    files: ['src/views/partials/**/*.hbs', 'src/patterns/**/*.hbs'],
    tasks: ['assemble', 'notify:assemble']
  },
  templates: {
    files: ['src/views/**/*.hbs'],
    tasks: ['newer:assemble:dist', 'notify:assemble']
  },
  data: {
    files: ['src/data/**/*.json'],
    tasks: ['assemble', 'notify:assemble']
  },
  images: {
    files: ['src/assets/images/**/*'],
    tasks: ['newer:imagemin:dist', 'notify:imagemin']
  },
  sass: {
    files: ['src/assets/css/**/*.scss'],
    tasks: ['sass', 'notify:sass']
  },
  scripts: {
    files: ['src/assets/scripts/**/*.js'],
    tasks: ['newer:concat:core', 'newer:concat:site', 'notify:concat']
  },
  assets_misc: {
    files: [
      'src/assets/docs/**',
      'src/assets/fonts/**',
      'src/assets/images/core/favicon.ico',
      'src/assets/scripts/core/foundation/vendor/modernizr.js'
    ],
    tasks: ['newer:copy:dist', 'notify:copy']
  }

};