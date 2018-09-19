/**
 * Challenge 10
 * Converts a string
 * @param  {String} str
 * @return {String} str
 */
const changeCaseByLength = str => {
    return str.length < 3
        ? str.toUpperCase()
        : str.substring(0, 3).toLowerCase() + str.substring(3).toUpperCase();
};

module.exports = changeCaseByLength;
