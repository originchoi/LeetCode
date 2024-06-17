/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
    const result = [];

    if (nums.length === 0) return result;

    let left = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + 1 !== nums[i + 1]) {
            result.push(left === nums[i] ? nums[i].toString() : left + "->" + nums[i]);
            left = nums[i + 1];
        }
    }

    return result;    
};
