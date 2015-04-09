var
  React = require('react'),
  Router = require('react-router'),
  HistoryLocation = Router.HistoryLocation,
  routes = require('./routes'),
  { Header } = require('./components');

Router.run(routes, HistoryLocation, (Handler) => {
  var
    app;

  app = (
    <div>
      <Header />
      <Handler />
    </div>
  );

  React.render(app, document.getElementById('app'));
});