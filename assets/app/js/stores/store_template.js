const
  CHANGE_EVENT = 'change:storeTemplate';

var
  Store = require('./store'),
  { TEMPLATE_ACTION } = require('../constants'),
  actionHandlers,
  state,
  storeTemplate;

state = {
  data: [
    'hello world',
    'i am groot',
    'halt and catch fire',
    'foobar',
    'where in the world is carmen san diego',
    'brandon\'s mom',
    'saved by the bell'
  ],
  message: 'init'
};

actionHandlers = {
  [TEMPLATE_ACTION] (ran) {
    /*
    Modify data in some way
    NOTE: the data should be considered immutable, so use object and array
    functions that return new instances rather than mutating the underlying
    object (e.g., prefer Array.prototype.concat over Array.prototype.push)
    */
    state.message = state.data[Math.floor(ran * state.data.length)];
    this.emitChange();
  }
};

storeTemplate = new Store(CHANGE_EVENT, actionHandlers);
storeTemplate.getState = getState;

module.exports = storeTemplate;

function getState () {
  return state;
}