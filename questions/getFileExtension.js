/**
 * Challenge 6
 * Gets the extension of a given fileName
 * @param  {String} fileName
 * @return {String|null}
 */
const getFileExtension = fileName => {
    const matches = fileName.match(/\.(\w+$)/);
    return matches ? matches[1] : null;
};

module.exports = getFileExtension;
