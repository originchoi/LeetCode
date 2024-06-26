/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
    let decimalResult = 0;
    const reversedBits = n.toString(2).padStart(32, "0").split("").reverse().join("");
    
    for (let i = reversedBits.length - 1; i >= 0; i--) {
        if (reversedBits[i] === "1") {
            decimalResult += 2 ** (reversedBits.length - 1 - i);
        }
    }

    return decimalResult;
};
