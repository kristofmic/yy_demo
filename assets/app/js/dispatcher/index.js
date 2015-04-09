var
  { Dispatcher } = require('flux'),
  { VIEW_SOURCE, SERVER_SOURCE } = require('../constants'),
  assign = require('lodash/object/assign'),
  appDispatcher = new Dispatcher();

assign(appDispatcher, {
  handleViewAction,
  handleServerAction
});

module.exports = appDispatcher;

function handleServerAction (action) {
  this.dispatch({
    source: SERVER_SOURCE,
    action: action || {}
  });
}

function handleViewAction (action) {
  this.dispatch({
    source: VIEW_SOURCE,
    action: action || {}
  });
}