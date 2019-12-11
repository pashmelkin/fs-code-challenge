'use strict';

const express = require('express');
const router = express.Router();
const config = require('../config');
const Settings = require('../entities/Settings');


router.put('/', function(req, res) {
    const settings = new Settings(
      req.body.numberOfEggs,
      req.body.rotation,
      req.body.sequence);

      const errors = settings.Validate();
      if (errors.length > 0) {
          res.status(400).json(errors);
      }
      else
      {
          config.numberEggs = settings.numberEggs;
          config.rotation = settings.rotation;
          config.sequence = settings.sequence;

          res.status(202).end();
      }
});

module.exports = router;
