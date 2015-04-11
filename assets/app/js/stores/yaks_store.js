const
  CHANGE_EVENT = 'change:yaksStore';

var
  Store = require('./store'),
  { FETCH_YAKS, LOAD_NEW_YAKS } = require('../constants'),
  findIndex = require('lodash/array/findIndex'),
  actionHandlers,
  state,
  storeTemplate;

state = {
  messages: [],
  newMessages: []
};

actionHandlers = {
  [FETCH_YAKS]: function (data) {
    var
      index;

    if (data.messages) {

      if (state.messages.length) {
        index = findIndex(data.messages, {
          messageID: state.messages[0].messageID
        });

        if (index > 0) {
          state.newMessages = data.messages.splice(0, index);
        }
      }

      state.messages = data.messages;
      this.emitChange();
    }
  },

  [LOAD_NEW_YAKS]: function () {
    state.messages = state.newMessages.concat(state.messages);
    state.newMessages = [];
    this.emitChange();
  }
};

storeTemplate = new Store(CHANGE_EVENT, actionHandlers);
storeTemplate.getState = getState;

module.exports = storeTemplate;

function getState () {
  return state;
}