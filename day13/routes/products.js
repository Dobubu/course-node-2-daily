var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const q = req.query;

  res.status(200).json({
    status: 'success',
    data: { ...q }
  });
});

module.exports = router;
