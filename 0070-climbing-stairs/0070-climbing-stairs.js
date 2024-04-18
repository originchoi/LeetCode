/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    let oneStep = 2;
    let twoStep = 1;
    let ways = 0;
    
    for (let i = 3; i <= n; i++) {
        ways = oneStep + twoStep;
        twoStep = oneStep;
        oneStep = ways;
    }
    
    return ways;
};
