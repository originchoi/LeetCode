/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
    if (x < 2) return x;

    let left = -1;
    let right = x;
    let result = 0;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (mid <= x / mid) {
            left = mid + 1;
            result = mid;
        } else {
            right = mid - 1;
        }
    }

    return result;
};
