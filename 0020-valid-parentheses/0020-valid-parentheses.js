/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const bracketsMapping = {
        ")" : "(",
        "}" : "{",
        "]" : "[",
    };
    
    for (let bracket of s) {
        if (bracketsMapping[bracket]) {
            const topElement = stack.pop();
            
            if (bracketsMapping[bracket] !== topElement) {
                return false;
            }
        } else {
            stack.push(bracket);
        }
    }
    
    return stack.length === 0;
};
