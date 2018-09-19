/**
 * Sums two given numbers and triples the sum if the numbers are equal
 * @param  {Number} a
 * @param  {Number} b
 * @return {Number}
 */
const sum = (a, b) => (a === b ? 3 * (a + b) : a + b);

module.exports = sum;
