/**
 * Challenge 8
 * Determines the first number that is closer to 100 on the number line
 * @param  {Number} a
 * @param  {Number} b
 * @throws {TypeError}
 * @return {Number}
 */
const closestTo100 = (a, b) => {
    if (!(+a && +b)) {
        throw new TypeError("Both inputs  must be numbers");
    }

    return Math.abs(100 - a) < Math.abs(100 - b) ? a : b;
};

module.exports = closestTo100;

