/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {   
    let zeroesIndex = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            let temp = nums[i];

            nums[i] = nums[zeroesIndex];
            nums[zeroesIndex] = temp;
            zeroesIndex++;
        }
    }

    return nums;
};
