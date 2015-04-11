var
  ajax = require('axios'),
  routes;

routes = {
  fetch: '/api/yaks',
  fetchComments: '/api/yaks/:yakId/comments'
};

module.exports = {
  fetch,
  fetchComments
};

function fetch(config) {
  var
    query = '',
    req;

  config = config || {};

  if (config.lat && config.long) {
    query += `?lat=${config.lat}&long=${config.long}`;
  }

  req = {
    url: routes.fetch + query,
    method: 'get',
    responseType: 'json'
  };

  return ajax(req)
    .then(resolveData);
}

function fetchComments(id) {
  var
    req;

  req = {
    url: routes.fetchComments.replace(':yakId', id),
    method: 'get',
    responseType: 'json'
  };

  return ajax(req)
    .then(resolveData);
}

function resolveData(res) {
  res = res || {};
  return res.data;
}