/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const resultList = [];
    let counts = 0;

    while (counts <= n) {
        const binaryN = counts.toString(2);

        resultList.push(binaryN.split("1").length - 1);
        counts++;
    }

    return resultList;
};
