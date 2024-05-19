/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
    const resultList = [];
    
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        
        resultList.push(count);
    }
    
    return resultList;
};