/**
 * @param {number[]} nums
 * @return {number}
 */
// XOR 연산을 사용하여 해결하기
const singleNumber = function(nums) {
    return nums.reduce((acc, num) => acc ^ num, 0);
};
