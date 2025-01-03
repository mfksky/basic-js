const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let isTrue = true;

  const arr = n.split('-');

  if (arr.length !== 6) {
    isTrue = false;
  } else {
    for (let group of arr) {
      if (group.length !== 2) {
        isTrue = false;
        break;
      }

      isTrue = group
        .split('')
        .every(
          (char) => (char >= 0 && char <= 9) || (char >= 'A' && char <= 'F'),
        );

      if (!isTrue) break;
    }
  }

  return isTrue;
}

module.exports = {
  isMAC48Address,
};
