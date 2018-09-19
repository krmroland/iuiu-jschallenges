/**
 * Sums an infinite sequence
 * @param  {...[Number]} numbers
 * @return {Number}
 */
const sum = (...numbers) =>
    numbers.filter(number => +number).reduce((prev, next) => prev + next, 0);

module.exports = sum;
