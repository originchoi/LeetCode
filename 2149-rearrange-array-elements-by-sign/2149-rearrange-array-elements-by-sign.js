/**
 * @param {number[]} nums
 * @return {number[]}
 */
const rearrangeArray = function(nums) {
    const resultList = [];
    let positiveIndex = 0;
    let negativeIndex = 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            resultList[positiveIndex] = nums[i];
            positiveIndex += 2;
        } else {
            resultList[negativeIndex] = nums[i];
            negativeIndex += 2;
        }
    }
    
    return resultList;
};
