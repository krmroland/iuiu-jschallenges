/**
 * Challenge 9
 * Removes duplicates from a given string
 * @param  {String} words
 * @return {String}
 */
const removeDuplicates = words => [...new Set(words.split(" "))].join(" ");

module.exports = removeDuplicates;
