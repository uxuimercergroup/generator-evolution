module.exports = {

  // Watch for file changes and refresh browser with livereload
  options: {
    livereload: true,
    spawn: false
  },
  layouts: {
    files: ['src/views/layouts/**/*.hbs'],
    tasks: ['assemble', 'notify:assemble']
  },
  partials: {
    files: ['src/views/partials/**/*{.hbs,.md}', 'src/patterns/**/*.hbs'],
    tasks: ['assemble', 'notify:assemble']
  },
  templates: {
    files: ['src/views/templates/**/*.hbs'],
    tasks: ['newer:assemble:dist', 'notify:assemble']
  },
  page_templates: {
    files: ['src/views/page-templates/**/*.hbs'],
    tasks: ['newer:assemble:page_templates', 'notify:assemble']
  },
  content: {
    files: ['src/content/**/*.md'],
    tasks: ['assemble', 'notify:assemble']
  },
  data: {
    files: ['src/data/**/*.json', 'package.json'],
    tasks: ['assemble', 'notify:assemble']
  },
  sass: {
    files: ['src/assets/scss/**/*.scss', 'src/patterns/**/*.scss'],
    tasks: ['sass', 'notify:sass']
  },
  postcss: {
    files: ['src/assets/scss/**/*.scss', 'src/patterns/**/*.scss'],
    tasks: ['postcss', 'notify:postcss']
  },
  scripts: {
    files: ['src/assets/js/**/*.js', 'src/patterns/**/*.js'],
    tasks: ['newer:concat:core', 'newer:concat:animation', 'newer:concat:site', 'notify:concat']
  },
  assets_copy: {
    files: [
      'src/assets/docs/**',
      'src/assets/fonts/**',
      'src/assets/images/**',
      'src/assets/js/app/**/*.js'
    ],
    tasks: ['newer:copy:dist', 'notify:copy']
  },
  patterns_copy: {
    files: [
      'src/patterns/**/*.js'
    ],
    tasks: ['newer:copy:patterns', 'notify:copy']
  }

};