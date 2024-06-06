/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s) {
    const stack = [];
    let currentNum = 0;
    let currentString = "";
    
    for (const char of s) {
        if (char === "[") {
            stack.push(currentString);
            stack.push(currentNum);
            currentString = "";
            currentNum = 0;
        } else if (char === "]") {
            const num = stack.pop();
            const prevString = stack.pop();
            
            currentString = prevString + currentString.repeat(num);
        } else if (char >= "0" && char <= "9") {
            currentNum = currentNum * 10 + parseInt(char);
        } else {
            currentString += char;
        }
    }
    
    return currentString;
};
