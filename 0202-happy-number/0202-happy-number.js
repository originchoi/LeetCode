/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
    function getSumOfSquares(num) {
        let sum = 0;

        while (num > 0) {
            let digit = num % 10;
            
            sum += digit * digit;
            num = Math.floor(num / 10);
        }

        return sum;
    }

    let seen = new Set();

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = getSumOfSquares(n);
    }

    return n === 1;
};
