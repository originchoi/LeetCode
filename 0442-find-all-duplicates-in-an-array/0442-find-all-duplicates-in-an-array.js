/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function(nums) {
    const resultList = [];
    const countNums = {};
    
    for (const num of nums) {
        if (!countNums[num]) {
            countNums[num] = 0;
        }
        
        countNums[num]++;
    }
    
    for (const num in countNums) {
        if (countNums[num] === 2) {
            resultList.push(parseInt(num));
        }
    }
    
    return resultList;
};
