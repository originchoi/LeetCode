/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
    const resultList = new Array(n + 1).fill(0);

    for (let i = 0; i <= n; i++) {
        resultList[i] = countOnes(i);
    }

    return resultList;
};

function countOnes(num) {
    let count = 0;
    
    while (num > 0) {
        if (num % 2 === 1) {
            count++;
        }

        num = Math.floor(num / 2);
    }

    return count;
}
