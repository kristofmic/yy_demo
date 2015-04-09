module.exports = gruntConfig;

function gruntConfig(grunt) {
  var
    pkg = grunt.file.readJSON('package.json'),
    tasks = require('./tasks/grunt'),
    gruntInitConfig;

  gruntInitConfig = {
    // Set these to the appropriate directories
    jsPath: 'assets/app/js',
    cssPath: 'assets/app/css',
    imagePath: 'assets/app/img',
    fontPath: 'assets/app/fonts',
    pubJsPath: 'public/js',
    pubCssPath: 'public/css',
    pubImagePath: 'public/img',
    pubFontPath: 'public/fonts'
  };

  for (var task in tasks) {
    gruntInitConfig[task] = tasks[task];
  }

  grunt.initConfig(gruntInitConfig);

  for (var dep in pkg.devDependencies) {
    if (dep !== 'grunt' && !dep.indexOf('grunt')) {
      grunt.loadNpmTasks(dep);
    }
  }

  grunt.registerTask('build:dev', [
    'env:dev',
    'sass:dev',
    'browserify:bundle'
  ]);
  grunt.registerTask('build:dist', [
    'env:prod',
    'clean',
    'sass:dev',
    'sass:dist',
    'browserify:bundle',
    'uglify',
    'filerev',
    'userev'
  ]);
  grunt.registerTask('build:watch', [
    'build:dist',
    'watch'
  ]);
  grunt.registerTask('server', ['bgShell:server']);
  grunt.registerTask('default', [
    'build:dist',
    'env:dev',
    'server'
  ]);
}