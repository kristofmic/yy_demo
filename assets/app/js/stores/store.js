var
  dispatcher = require('../dispatcher'),
  EventEmitter2 = require('eventemitter2').EventEmitter2,
  isFunction = require('lodash/lang/isFunction');

class Store extends EventEmitter2 {
  constructor(CHANGE_EVENT, actionHandlers) {
    super({wildcard: true, delimiter: ':'});
    this._CHANGE_EVENT = CHANGE_EVENT;
    this._actionHandlers = actionHandlers;

    this.dispatchToken = dispatcher.register(handleDispatch.bind(this));
  }

  addChangeListener (cb) {
    this.on(this._CHANGE_EVENT, cb);
  }

  removeChangeListener (cb) {
    this.off(this._CHANGE_EVENT, cb);
  }

  emitChange () {
    this.emit(this._CHANGE_EVENT);
  }
}

module.exports = Store;

function handleDispatch (payload) {
  var
    action = payload.action,
    handler = this._actionHandlers[action.type];

  if (handler && isFunction(handler)) {
    handler.call(this, action.data);
  }
}