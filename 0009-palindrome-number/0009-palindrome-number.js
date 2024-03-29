/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    
    const stringNumbers = x.toString();
    
    for (let i = 0; i < stringNumbers.length; i++) {
        if (stringNumbers[i] !== stringNumbers[stringNumbers.length -1 - i]) {
            return false;
        }
    }
    
    return true;
};