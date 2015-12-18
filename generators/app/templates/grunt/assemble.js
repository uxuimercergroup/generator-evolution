module.exports = {

  // Assemble Handlebars templates into static HTML
  options: {
    flatten: false,
    assets: 'dist/assets',
    partials: ['src/views/partials/**/*.hbs', 'src/patterns/**/*.hbs'],
    helpers: ['src/helpers/**/*.js'],
    layoutdir: 'src/views/layouts',
    layout: 'default-layout.hbs',
    data: ['src/data/**/*.json']
  },
  dist: {
    files: [
      {
      expand: true,
      cwd: 'src/views/templates/',
      src: '**/*.hbs',
      dest: 'dist/',
      ext: '.html'
      }
    ]
  }

};