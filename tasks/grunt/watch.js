module.exports = {
  scripts: {
    files: ['<%= jsPath %>/**/*.js', '<%= jsPath %>/**/*.jsx'],
    tasks: ['browserify:bundle'],
    options: {
      livereload: true
    }
  },
  styles: {
    files: [
      '<%= cssPath %>/**/*.scss'
    ],
    tasks: ['sass:dev'],
    options: {
      // livereload: true
    }
  },
};