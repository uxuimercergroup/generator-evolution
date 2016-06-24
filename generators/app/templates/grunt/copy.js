module.exports = {

  // Copy files and directories during build, used for files and directories that are not processed but need to be copied to generated files directory
  dist: {
    files: [
      {
      expand: true,
      cwd: 'src/assets/',
      src: [
        'docs/**',
        'fonts/**',
        'images/**'
      ],
      dest: 'dist/assets'
      }
    ]
  },
  prod: {
    files: [
      {
      expand: true,
      cwd: 'src/assets/',
      src: [
        'docs/**',
        'fonts/**',
        'images/core/favicon.ico'
      ],
      dest: 'dist/assets'
      }
    ]
  },
  patterns: {
    files: [
      {
      expand: true,
      cwd: 'src/patterns/',
      src: [
        '**/*.js',
        '**/*.json'
      ],
      dest: 'dist/patterns'
      }
    ]
  },
  source_boilerplate_sass: {
    files: [
      {
      expand: true,
      cwd: '',
      src: [
        'src/assets/**',
        'src/design/**'
      ],
      dest: 'dist'
      }
    ]
  },
  source_boilerplate_css: {
    files: [
      {
      expand: true,
      cwd: '',
      src: [
        'src/design/**'
      ],
      dest: 'dist'
      }
    ]
  },
  source_boilerplate_docs: {
    files: [
      {
      expand: true,
      cwd: '',
      src: [
        'CHANGELOG.md',
        'package.json',
        'README.md',
      ],
      dest: 'dist'
      }
    ]
  },
};