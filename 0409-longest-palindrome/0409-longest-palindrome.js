/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
    if (s.length === 1) return 1;

    let sum = 0;
    const obj = {};

    for (let i = 0; i < s.length; i++) {
        const checker = s[i];

        if (!obj[checker]) {
            obj[checker] = 1;
        } else {
            obj[checker] = 0;
            sum += 2;
        }
    }

    if (sum < s.length) {
        return sum + 1;
    } else {
        return sum;
    }
};