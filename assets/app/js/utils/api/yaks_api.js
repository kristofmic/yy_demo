var
  ajax = require('axios'),
  routes;

routes = {
  fetch: '/api/yaks',
};

module.exports = {
  fetch
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
    .then((res) => {
      if (res.status === 200) return res.data;
    });
}