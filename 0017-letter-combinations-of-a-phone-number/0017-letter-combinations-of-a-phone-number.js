/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const resultList = [];
    const digitsLetter = {
        "2": "abc",
        "3": "def",
        "4": "ghi",
        "5": "jkl",
        "6": "mno",
        "7": "pqrs",
        "8": "tuv",
        "9": "wxyz"
    }

    function backtrack(index, path) {
        if (path.length === digits.length) {
            resultList.push(path);
            return;
        }

        const letters = digitsLetter[digits[index]];

        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, path + letters[i]);
        }
    }

    backtrack(0, "");

    return resultList;
};
