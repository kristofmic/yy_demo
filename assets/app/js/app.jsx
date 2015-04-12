var
  React = require('react'),
  Router = require('react-router'),
  HistoryLocation = Router.HistoryLocation,
  routes = require('./routes'),
  { Header } = require('./components');

Router.run(routes, HistoryLocation, (Handler, state) => {
  var
    params = state.params,
    app;

  app = (
    <div>
      <Header />
      <Handler params={params} />
    </div>
  );

  React.render(app, document.getElementById('app'));
});