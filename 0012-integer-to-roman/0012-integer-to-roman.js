/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
    const onesList = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tensList = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hundredsList = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const thousandsList = ["", "M", "MM", "MMM"];

    return thousandsList[Math.floor(num / 1000)] + hundredsList[Math.floor((num % 1000) / 100)] + tensList[Math.floor((num % 100) / 10)] + onesList[num % 10];
};