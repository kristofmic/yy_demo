const
  CHANGE_EVENT = 'change:yaksStore';

var
  Store = require('./store'),
  { FETCH_YAKS, LOAD_NEW_YAKS } = require('../constants'),
  findIndex = require('lodash/array/findIndex'),
  find = require('lodash/collection/find'),
  actionHandlers,
  state,
  yaksStore;

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

yaksStore = new Store(CHANGE_EVENT, actionHandlers);
yaksStore.getState = getState;
yaksStore.getMessage = getMessage;

module.exports = yaksStore;

function getState () {
  return state;
}

function getMessage (messageID) {
  return find(state.messages, { messageID });
}