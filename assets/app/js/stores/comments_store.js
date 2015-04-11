const
  CHANGE_EVENT = 'change:commentsStore';

var
  Store = require('./store'),
  { INIT_FETCH_YAK_COMMENTS, FETCH_YAK_COMMENTS } = require('../constants'),
  actionHandlers,
  state,
  commentsStore;

state = {
  comments: {},
  fetching: {}
};

actionHandlers = {
  [FETCH_YAK_COMMENTS]: function (data) {
    var
      yakId = data.messageID;

    state.fetching[yakId] = false;
    state.comments[yakId] = data.comments;

    this.emitChange();
  },

  [INIT_FETCH_YAK_COMMENTS]: function (data) {
    var
      yakId = data.yakId;

    state.fetching[yakId] = true;

    this.emitChange();
  }
};

commentsStore = new Store(CHANGE_EVENT, actionHandlers);
commentsStore.getState = getState;

module.exports = commentsStore;

function getState () {
  return state;
}