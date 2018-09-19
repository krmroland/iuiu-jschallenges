/**
 * Challenge 10
 * Converts a string
 * @param  {String} str
 * @return {String} str
 */
const changeCaseByLength = str => {
    if (str.length < 3) return str.toUpperCase();
    return str.substring(0, 3).toLowerCase() + str.substring(3).toUpperCase();
};

module.exports = changeCaseByLength;
