var
  { Dispatcher } = require('flux'),
  { VIEW_ACTION, SERVER_ACTION } = require('../constants'),
  assign = require('lodash/object/assign'),
  appDispatcher = new Dispatcher();

assign(appDispatcher, {
  handleViewAction,
  handleServerAction
});

module.exports = appDispatcher;

function handleServerAction (action) {
  this.dispatch({
    source: SERVER_ACTION,
    action: action || {}
  });
}

function handleViewAction (action) {
  this.dispatch({
    source: VIEW_ACTION,
    action: action || {}
  });
}