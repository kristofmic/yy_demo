var
  express = require('express'),
  router = express.Router(),
  https = require('https'),
  util = require('util'),
  YY_API = 'https://us-central-api.yikyakapi.net/api/getMessages?userID=-&lat=%s&long=%s&userLat=%s&userLong=%s&version=2.4.1&horizontalAccuracy=65.000000&verticalAccuracy=10.000000&altitude=0&floorLevel=0&speed=0&course=0',
  YY_HQ_LAT = '33.849120',
  YY_HQ_LONG = '-84.373375';

router.get('/yaks', fetchYaks);

module.exports = router;

function fetchYaks(req, res) {
  var
    lat = req.query.lat || YY_HQ_LAT,
    long = req.query.long || YY_HQ_LONG,
    url = util.format(YY_API, lat, long, lat, long);

  https
    .get(url, handleResponse)
    .on('error', handleError(res));

  function handleResponse(httpsRes) {
    var
      body = '';

    if (httpsRes.statusCode !== 200) {
      return handleError(res)(new Error('Error fetching Yaks.'));
    }
    httpsRes.setEncoding('utf8');

    httpsRes.on('data', function(chunk) {
      body += chunk;
    });

    httpsRes.on('end', function() {
      var
        json = JSON.parse(body);

      handleSuccess(res)(json);
    });
  }
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