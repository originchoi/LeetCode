/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
    const result = [];

    while (result.length <= rowIndex) {
        result.unshift(1);

        for (let i = 1; i < result.length - 1; i++) {
            result[i] += result[i + 1];
        }
    }

    return result;
};
