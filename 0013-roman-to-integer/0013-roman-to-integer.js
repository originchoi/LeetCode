/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    const romanMap = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    };
    
    for (let i = 0; i < s.length; i++) {
        const currentRoman = romanMap[s[i]];
        const nextRoman = romanMap[s[i + 1]];
        
        if (nextRoman > currentRoman) {
            result += nextRoman - currentRoman;
            i++;
        } else {
            result += currentRoman;
        }
    }
    
    return result;
};
