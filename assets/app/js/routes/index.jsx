var
  React = require('react'),
  { Route, DefaultRoute, Redirect } = require('react-router'),
  { Container, Feed } = require('../components'),
  routes;

routes = (
  <Route name="container" path="/" handler={Container}>
    <Route name="feed" handler={Feed} />
    <DefaultRoute handler={Feed} />
    <Redirect from="*" to="feed" />
  </Route>
);

module.exports = routes;

