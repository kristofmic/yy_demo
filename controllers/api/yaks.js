var
  YY_FETCH_API = 'https://us-central-api.yikyakapi.net/api/getMessages?userID=-&lat=%s&long=%s&userLat=%s&userLong=%s&version=2.5.1&horizontalAccuracy=65.000000&verticalAccuracy=10.000000&altitude=0&floorLevel=0&speed=0&course=0',
  YY_FETCH_COMMENTS_API = 'https://us-central-api.yikyakapi.net/api/getComments?userID=-&messageID=%s&userLat=%s&userLong=%s&version=2.5.1&horizontalAccuracy=65.000000&verticalAccuracy=10.000000&altitude=0&floorLevel=0&speed=0&course=0',
  YY_HQ_LAT = '33.849120',
  YY_HQ_LONG = '-84.373375',
  express = require('express'),
  router = express.Router(),
  https = require('https'),
  Bluebird = require('bluebird'),
  util = require('util');

router.get('/yaks', fetchYaks);
router.get('/yaks/:yakId/comments', fetchComments);

module.exports = router;

function fetchYaks(req, res) {
  var
    lat = req.query.lat || YY_HQ_LAT,
    long = req.query.long || YY_HQ_LONG,
    url = util.format(YY_FETCH_API, lat, long, lat, long);

  get(url)
    .then(handleSuccess(res))
    .catch(handleError(res));
}

function fetchComments(req, res) {
  var
    id = decodeURIComponent(req.params.yakId),
    lat = req.query.lat || YY_HQ_LAT,
    long = req.query.long || YY_HQ_LONG,
    url = util.format(YY_FETCH_COMMENTS_API, id, lat, long);

  get(url)
    .then(function(data) {
      data.messageID = id;
      return data;
    })
    .then(handleSuccess(res))
    .catch(handleError(res));
}

function get(url) {
  var
    deferredPromise = new Bluebird(defer);

  return deferredPromise;

  function defer(resolve, reject) {
    https
      .get(url, handleResponse)
      .on('error', reject);

    function handleResponse(httpsRes) {
      var
        body = '';

      if (httpsRes.statusCode !== 200) {
        return reject(new Error('Server responded with ' + httpsRes.statusCode + ' error.'));
      }

      httpsRes.setEncoding('utf8');

      httpsRes.on('data', function(chunk) {
        body += chunk;
      });

      httpsRes.on('end', function() {
        resolve(tryParse(body));
      });
    }
  }
}

function tryParse(jsonString) {
  try {
    jsonString = JSON.parse(jsonString);
  }
  catch(e) {}

  return jsonString;
}

function handleSuccess(res) {
  return sendResponse;

  function sendResponse(data) {
    res.status(200).json(data);
  }
}

function handleError(res) {
  return sendError;

  function sendError(err) {
    err = err || {};
    res.status(500).json(err.message ||
                         'Oops! Something went wrong. Please try again.');
  }
}