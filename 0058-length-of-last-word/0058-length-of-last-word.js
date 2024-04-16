/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
    let currentLength = 0;
    let lastLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            if (currentLength > 0) {
                lastLength = currentLength;
                currentLength = 0;
            }
        } else {
            currentLength++;
        }
    }

    if (currentLength > 0) {
        lastLength = currentLength;
    }

    return lastLength;
};
