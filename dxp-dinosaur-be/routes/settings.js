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

    //  let errors = settings.Validate();
        //if errors.array = =0 then set to config
        // else return error
      console.log(req.body);    // Prints the JSON object

    config.numberEggs = settings.numberEggs;
    config.rotation = settings.rotation;
    config.sequence = settings.sequence;
    console.log(config.numberEggs + ' ' + config.rotation + ' ' + config.sequence);
   res.send(config.numberEggs + ' ' + config.rotation + ' ' + config.sequence);
});

module.exports = router;
