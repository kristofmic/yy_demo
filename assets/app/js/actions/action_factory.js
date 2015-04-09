var
  dispatcher = require('../dispatcher'),
  { FETCH_YAKS, FETCH_YAKS_ERROR, LOAD_NEW_YAKS } = require('../constants'),
  ajax = require('axios'),
  actionFactoryTemplate;

actionFactoryTemplate = {
  fetchYaks,
  loadNewYaks
};

module.exports = actionFactoryTemplate;

function fetchYaks(coords) {
  var
    req,
    query = '';

  coords = coords || {};
  if (coords.lat && coords.long) {
    query += `?lat=${coords.lat}&long=${coords.long}`;
  }

  req = {
    url: `/api/yaks${query}`,
    method: 'get',
    responseType: 'json'
  };

  ajax(req)
    .then((res) => {
      if (res.status === 200) return res.data;
    })
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