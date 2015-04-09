module.exports = {
  bundle: {
    src: '<%= jsPath %>/app.jsx',
    dest: '<%= pubJsPath %>/app.bundle.js',
    options: {
      transform: ['reactify', 'babelify'],
      browserifyOptions: {
        extensions: ['.jsx']
      }
    }
  }
};