/**
 *  Reverses a given word
 * @param  {String} str
 * @return {String}
 */
const reverseString = str => {
    if (!str) {
        new TypeError("Input string is required");
    }
    return [...str].reverse().join("");
};

module.exports = reverseString;
