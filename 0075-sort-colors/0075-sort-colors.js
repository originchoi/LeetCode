/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
    let index = 0;
    let left = 0;
    let right = nums.length -1;

    while (index <= right && left < right) {
        if (nums[index] === 0) {
            [nums[index], nums[left]] = [nums[left], nums[index]];
            left++;
            index++;
        } else if (nums[index] === 2) {
            [nums[index], nums[right]] = [nums[right], nums[index]];
            right--;
        } else {
            index++;
        }
    }
};
