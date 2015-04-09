module.exports = {
  all: {
    options: {
      compress: {
        drop_debugger: true,
        drop_console: true
      },
      sourceMap: true,
      screwIE8: true
    },
    files: {
      '<%= pubJsPath %>/app.bundle.min.js': ['<%= pubJsPath %>/app.bundle.js']
    }
  }
};