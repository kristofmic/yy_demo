var
  React = require('react'),
  { Route, DefaultRoute, Redirect } = require('react-router'),
  App = require('../components/app_template'),
  routes;

routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="t1" handler={App.T1} />
    <Route name="t2" handler={App.T2} />
    <DefaultRoute handler={App.T1} />
    <Redirect from="*" to="t1" />
  </Route>
);

module.exports = routes;

