/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    // 보이어-무어 알고리즘 적용
    let count = 0;
    let majorityNum = null;

    for (const num of nums) {
        if (count === 0) {
            majorityNum = num;
        }

        count += (num === majorityNum) ? 1 : -1;
    }

    return majorityNum;
};
