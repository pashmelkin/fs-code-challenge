'use strict';

const express = require('express');
const router = express.Router();
const config = require('../config');

function IsConfigValid () {
  if(config.numberEggs === '0' || config.rotation  === '0')
  {
    return false;
  }
  return true;
}

router.post('/', function(req, res) {

  if (IsConfigValid() === false)
  {
    res.status(400).send("Configuration is wrong");
  }
  else
  {
    let rotations = [];
    let i = 1;
    const rotationParsed = parseFloat(config.rotation);

    while (i <= config.numberEggs)
    {
      rotations.push({"egg" : i, "was_rotated": 0.0})
      i++;
    }
    let orders = Array.from(config.sequence.split(" "));
    orders.forEach(order => {
      rotations[order-1]["was_rotated"] += rotationParsed
    })

    let report = {
      "number_of_eggs": config.numberEggs,
      "sequence": config.sequence,
      "rotation_amount": config.rotation,
      rotations
    }
    res.json(report);
  }
});


module.exports = router;
