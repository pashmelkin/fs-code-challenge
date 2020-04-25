

function isAllNumeric (inputtxt)  {
        console.log("isAllnumeric: " + inputtxt);
        const numbers = /^[0-9 .]+$/;
        return !!inputtxt.match(numbers);
}

export default isAllNumeric;