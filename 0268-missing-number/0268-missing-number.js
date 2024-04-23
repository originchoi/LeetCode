/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const gaussSum = (nums.length * (nums.length + 1)) / 2;
    let numsSum = 0;

    for (let i = 0; i < nums.length; i++) {
        numsSum += nums[i];
    }

    return gaussSum - numsSum;
};
