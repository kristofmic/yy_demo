module.exports = function router(app) {
  app.use('/api', require('./api'));

  app.use('/health', healthCheck);
  app.use('/', defaultRoute);
};

function healthCheck(req, res) {
  res.status(200).json({status: 'okay'});
}

function defaultRoute(req, res) {
  res.render('app/index');
}
