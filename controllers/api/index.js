module.exports = function apiController(app) {
  app.use('/api', require('./yaks'));
};