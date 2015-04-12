const
  CHANGE_EVENT = 'change:commentsStore';

var
  Store = require('./store'),
  { FETCH_YAK_COMMENTS } = require('../constants'),
  actionHandlers,
  state,
  commentsStore;

state = {
  comments: {}
};

actionHandlers = {
  [FETCH_YAK_COMMENTS]: function (data) {
    var
      yakId = data.messageID;

    state.comments[yakId] = data.comments;

    this.emitChange();
  }
};

commentsStore = new Store(CHANGE_EVENT, actionHandlers);
commentsStore.getState = getState;

module.exports = commentsStore;

function getState () {
  return state;
}