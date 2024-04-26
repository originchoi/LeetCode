/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function(nums) {
    const resultList = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        resultList[i] = Math.pow(nums[i], 2);
    }

    return resultList.sort((a, b) => a - b);
};
