module.exports = {

  // Deploy contents of generated files directory to FTP server
  build: {
    auth: {
      host: '',
      authKey: 'key1'
    },
    src: 'dist/',
    dest: '', // for example: /www/content/uxui/docs/path/to/project/dir
    serverSep: '/',
    concurrency: 3,
    progress: true
  }

};