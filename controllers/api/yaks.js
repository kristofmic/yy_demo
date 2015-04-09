var
  express = require('express'),
  router = express.Router(),
  request = require('request'),
  bluebird = require('bluebird'),
  requestGet = bluebird.promisify(request.get),
  util = require('util'),
  YY_API = 'https://us-central-api.yikyakapi.net/api/getMessages?userID=-&lat%s=&long%s=&userLat=%s&userLong=%s&version=2.4.1&horizontalAccuracy=65.000000&verticalAccuracy=10.000000&altitude=0&floorLevel=0&speed=0&course=0',
  YY_HQ_LAT = '33.849120',
  YY_HQ_LONG = '-84.373375',
  PRODUCTION = 'elb-demoapps-1068152694.us-west-2.elb.amazonaws',
  LOCALHOST = 'localhost';

router.get('/yaks', fetchYaks);

module.exports = router;

function fetchYaks(req, res) {
  var
    validHost = LOCALHOST;
  if (process.env.NODE_ENV === 'production') {
    validHost = PRODUCTION;
  }

  if (!req.header('host').match(validHost)) {
    return res.status(401).json('Unauthorized application');
  }

  var
    lat = req.query.lat || YY_HQ_LAT,
    long = req.query.long || YY_HQ_LONG;

  requestGet({
    url: util.format(YY_API, lat, long, lat, long),
    json: true
  })
  .then(handleSuccess(res))
  .catch(handleError(res));
}

function handleSuccess(res) {
  return sendResponse;

  function sendResponse(data) {
    var
      httpResponse = data[0],
      body = data[1];

    if (httpResponse.statusCode !== 200) {
      return handleError(res)(new Error('Error fetching Yaks. Please try again.'));
    }

    res.status(200).send(body);
  }
}

function handleError(res) {
  return sendError;

  function sendError(err) {
    err = err || {};
    res.status(500).send(err.message ||
                         'Oops! Something went wrong. Please try again.');
  }
}