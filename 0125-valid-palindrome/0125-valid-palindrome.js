/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    let cleanedString = "";

    for (const char of s) {
        let lowerChar = char.toLowerCase();

        if ((lowerChar >= "a" && lowerChar <= "z") || (lowerChar >= "0" && lowerChar <= "9")) {
            cleanedString += lowerChar;
        }
    }

    let left = 0;
    let right = cleanedString.length - 1;

    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) return false;

        left++;
        right--;
    }

    return true;
};
