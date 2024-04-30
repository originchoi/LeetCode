/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 const addBinary = function(a, b) {
    const maxLength = Math.max(a.length, b.length);
    const result = [];
    let carry = 0;

    a = a.padStart(maxLength, "0");
    b = b.padStart(maxLength, "0");

    for (let i = maxLength - 1; i >= 0; i--) {
        const sum = parseInt(a[i]) + parseInt(b[i]) + carry;

        result[i] = sum % 2;
        carry = Math.floor(sum / 2);
    }

    if (carry) result.unshift(1);

    return result.join("");
};
