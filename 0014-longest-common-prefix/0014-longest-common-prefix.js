/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    const prefix = strs[0];
    
    for (let i = 0; i < prefix.length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== prefix[i]) {
                return prefix.substring(0, i);
            }
        }
    }

    return prefix;
};
