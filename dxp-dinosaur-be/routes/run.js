'use strict';

var express = require('express');
var router = express.Router();
const config = require('../config');

router.post('/', function(req, res) {

  let report = {
    "number_of_eggs": config.numberEggs,
    "sequence": config.sequence,
    "rotation_amount": config.rotation,
  "rotations": [
    { "egg": 1, "was_rotated": 0.5 },
    { "egg": 2, "was_rotated": 0.5 },
    { "egg": 3, "was_rotated": 0.5 },
    { "egg": 4, "was_rotated": 0.75 },
    { "egg": 5, "was_rotated": 0.25 }
  ]
  }
  res.json(report);
});


module.exports = router;
