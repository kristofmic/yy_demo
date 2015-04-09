var
  React = require('react'),
  Router = require('react-router'),
  // Leverages the HTML5 history API...
  HistoryLocation = Router.HistoryLocation,
  // HistoryLocation = null,
  routes = require('./routes');

Router.run(routes, HistoryLocation, (Handler) => {
  React.render(<Handler/>, document.getElementById('app'));
});