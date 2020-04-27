

function isAllNumeric (inputtxt)  {
        const numbers = /^[0-9]+$/;
        return !!inputtxt.match(numbers) ;
}

function checkSequence (inputtxt)  {

        return true;
}

function checkRotation (inputtxt)  {
        const number = Number(inputtxt);
        return !(isNaN(number) || number > 100 || inputtxt.includes('.') );
}

module.exports = {
        isAllNumeric,
        checkSequence,
        checkRotation
}