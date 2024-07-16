
function addCommas(num) {

    if (typeof num !== 'number') {
        return 'NaN'; // Return 'NaN' as a string when input is not a number
    }

    // Convert number to string
    let str = num.toString();
    
    //split the string into the integer and decimal if there is one
    let parts = str.split('.');
    let integerPart = parts[0];
    let decimalPart = parts.length > 1 ? '.' + parts[1] : '';
    
    // Add commas to the integer part with regex
    let pattern = /(-?\d+)(\d{3})/;
    //test to see if integerPart evaluates to true
    while (pattern.test(integerPart)) {
    //replace the integer part with the the $1 reps the /(-?\d+), and the $2 reps the (\d{3})/
        integerPart = integerPart.replace(pattern, '$1,$2');
    }
    
    // Combine integer part and decimal part (if any)
    return integerPart + decimalPart;
}
    

module.exports = addCommas;