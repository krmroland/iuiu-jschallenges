/**
 * Gets the extension of a given fileName
 * @param  {String} fileName
 * @return {String|null}
 */
const getFileExtension = fileName => {
    match = fileName.match(/\.(\w+$)/);
    return match ? match[1] : null;
};

module.exports = getFileExtension;
