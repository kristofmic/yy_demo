var
  React = require('react'),
  { Route, DefaultRoute, Redirect } = require('react-router'),
  { Container, Feed, Comments } = require('../components'),
  routes;

routes = (
  <Route name="container" path="/" handler={Container}>
    <Route name="feed" handler={Feed} />
    <Route name="comments" path="feed/:yakId/comments" handler={Comments} />
    <DefaultRoute handler={Feed} />
    <Redirect from="*" to="feed" />
  </Route>
);

module.exports = routes;

