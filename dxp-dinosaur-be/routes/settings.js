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


    console.log( req.body.numberOfEggs + ' ' + req.body.rotation + ' ' + req.body.sequence);
    let numberEggs = req.body.numberOfEggs;
    let rotation = req.body.rotation;
    let sequence = req.body.sequence;
    config.numberEggs = numberEggs;
    config.rotation = rotation;
    config.sequence = sequence;
    console.log(config.numberEggs + ' ' + config.rotation + ' ' + config.sequence);
   res.send(config.numberEggs + ' ' + config.rotation + ' ' + config.sequence);
});

module.exports = router;
