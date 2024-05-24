/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = function(s, t) {
    const processString = (str) => {
        const stack = [];

        for (const char of str) {
            if (char === "#") {
                stack.pop();
            } else {
                stack.push(char);
            }
        }

        return stack.join("");
    }

    return processString(s) === processString(t);
};