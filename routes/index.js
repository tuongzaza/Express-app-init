var express = require('express');
var router = express.Router();

var ApiRouter = require('./api');
var WebRouter = require('./web');

router.use('/api', ApiRouter);
router.use(WebRouter);

module.exports = router;
