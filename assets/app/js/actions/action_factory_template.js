var
  dispatcher = require('../dispatcher'),
  { TEMPLATE_ACTION } = require('../constants'),
  // ajax = require('axios'),
  actionFactoryTemplate;

actionFactoryTemplate = {
  templateAction
};

module.exports = actionFactoryTemplate;

function templateAction (data) {
  dispatcher.handleViewAction({
    type: TEMPLATE_ACTION,
    data
  });

  /*
  Do AJAX call...

  var
    req = {
      url: 'localhost',
      method: 'get/post/put/delete',
      responseType: 'json',
      headers: {},
      data: {}
    };

  ajax(req)
    .then((res) => {
      if (res.status === 200) return res.data;
    });

  */
}