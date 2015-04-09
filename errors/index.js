module.exports = function errors(app) {
  // catch 404 and forward to error handler
  app.use(handle404);

  app.use(handle500);

  function handle404(req, res, next) {
    var
      err = new Error('Not Found');

    err.status = 404;
    next(err);
  }

  function handle500(err, req, res) {
    var
      error;

    res.status(err.status || 500);
    error = {
      message: err.message,
      error: (app.get('env') !== 'production') ? err : {}
    };

    res.render('error', error);
  }
};