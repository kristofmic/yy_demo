var
  dispatcher = require('../dispatcher'),
  { FETCH_YAKS, FETCH_YAKS_ERROR, LOAD_NEW_YAKS } = require('../constants'),
  yaksApi = require('../utils/api/yaks_api'),
  actionFactoryTemplate;

actionFactoryTemplate = {
  fetchYaks,
  loadNewYaks
};

module.exports = actionFactoryTemplate;

function fetchYaks(coords) {
  yaksApi.fetch(coords)
    .then((data) => {
      dispatchServerAction(FETCH_YAKS, data);
    })
    ['catch']((err) => {
      dispatchServerAction(FETCH_YAKS_ERROR, err);
    });
}

function loadNewYaks() {
  dispatchViewAction(LOAD_NEW_YAKS);
}

function dispatchServerAction(type, data) {
  dispatcher.handleServerAction({
    type,
    data
  });
}

function dispatchViewAction(type, data) {
  dispatcher.handleViewAction({
    type,
    data
  });
}