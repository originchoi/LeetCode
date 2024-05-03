/**
 * @param {number} n
 * @return {number}
 */
const hammingWeight = function(n) {
    const binaryString = n.toString(2);

    return binaryString.split("").filter(char => char === "1").length;
};
