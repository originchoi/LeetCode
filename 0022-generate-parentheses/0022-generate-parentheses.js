/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    const resultList = [];

    function helper(current, open, close) {
        if (current.length === 2 * n) {
            resultList.push(current);
            return;
        }

        if (open < n) {
            helper(current + "(", open + 1, close);
        }

        if (close < open) {
            helper(current + ")", open, close + 1);
        }
    }

    helper("", 0, 0);
    
    return resultList;
};
