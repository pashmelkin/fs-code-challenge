'use strict';

var express = require('express');
var router = express.Router();
const config = require('../config');

router.post('/', function(req, res) {
//  res.json("eggs" : config.numberEggs);
console.log(config.numberEggs);
  res.send(config.numberEggs);
});

module.exports = router;
