

function isAllNumeric (inputtxt)  {
        const numbers = /^[0-9]+$/;
        return typeof(inputtxt) === 'number' ||  !!inputtxt.match(numbers);
}


function checkSequence (inputtxt)  {
        let result = true;
        console.log("cjheck " + inputtxt);
        inputtxt.split('').forEach(e => {
                const number = Number(e);
               result = result && !isNaN(number) && isAllNumeric(number);
        })
        return result;
}

module.exports = {
        isAllNumeric,
        checkSequence
}