module.exports = {
  // Concating
  dev: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= pubCssPath %>/app.css': '<%= cssPath %>/app.scss'
    }
  },
  // Concating and minifying
  dist: {
    options: {
      style: 'compressed'
    },
    files: {
      '<%= pubCssPath %>/app.min.css': '<%= pubCssPath %>/app.css'
    }
  }
};