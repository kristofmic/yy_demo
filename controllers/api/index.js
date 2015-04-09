var
  express = require('express'),
  router = express.Router();

router.get('/test', test);

module.exports = router;

function test(req, res) {
  res.status(200).json({test: 'success'});
}