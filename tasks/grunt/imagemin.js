module.exports = {
  dynamic: {
    files: [{
      expand: true,
      cwd: '<%= imagePath %>/',
      src: ['**/*.{png,jpg,gif,ico}'],
      dest: '<%= pubImagePath %>/'
    }]
  }
};