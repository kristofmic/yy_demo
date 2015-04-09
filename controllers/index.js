module.exports = function router(app) {
  require('./api')(app);

  app.use('/health', healthCheck);
  app.use('/', defaultRoute);
};

function healthCheck(req, res) {
  res.status(200).json({service: 'yikyak-web'});
}

function defaultRoute(req, res) {
  res.render('app/index');
}
