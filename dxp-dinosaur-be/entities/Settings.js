"use strict";

const VALIDATION_ERROR = "Validation Error";

class Settings {
  constructor(numberEggs, rotation, sequence) {
    this.numberEggs = numberEggs;
    this.rotation = rotation;
    this.sequence = sequence;
  }

  ValidateDecimalNumber(numberToValidate){
    const numberParsed = parseInt(numberToValidate, 10);
    if (isNaN(numberParsed) || numberParsed <= 0)
    {
      return(VALIDATION_ERROR);
    }
  }

  ValidateRotation(){
    const rotationParsed = parseFloat(this.rotation);
    if (isNaN(rotationParsed) || rotationParsed > 100)
    {
        return(VALIDATION_ERROR);
    }
  }

  ValidateSequence(){
    var elements = Array.from(this.sequence.split(" "));
    elements.forEach(element => {
        if(this.ValidateDecimalNumber(element) === VALIDATION_ERROR)
        {
          return (VALIDATION_ERROR);
        }
      })
    if (Math.max(...elements) > this.numberEggs)
    {
        return(VALIDATION_ERROR);
    }
  }

  Validate() {
    let errors = [];
    if(this.ValidateDecimalNumber(this.numberEggs) === VALIDATION_ERROR)
      errors.push("Wrong Number");
    if(this.ValidateRotation() === VALIDATION_ERROR)
      errors.push("Wrong Rotation");
    if(this.ValidateSequence() === VALIDATION_ERROR)
      errors.push("Wrong Sequence");
    return errors;
  }
}

module.exports = Settings;
