const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce(
    (acc, arr) => acc + arr.filter((item) => item === '^^').length,
    0,
  );

  // return matrix.flat().filter((item) => item === '^^').length;
}

console.log(
  countCats([
    [0, 1, '^^'],
    [0, '^^', 2],
    [0, 1, 2],
  ]),
);

module.exports = {
  countCats,
};
