const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = Array.from({ length: matrix.length }, () =>
    Array.from({ length: matrix[0].length }).fill(0),
  );

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        if (j > 0) newMatrix[i][j - 1] += 1;
        if (j < matrix[i].length - 1) newMatrix[i][j + 1] += 1;
        if (i > 0) newMatrix[i - 1][j] += 1;
        if (i < matrix.length - 1) newMatrix[i + 1][j] += 1;

        // Углы
        if (j > 0 && i > 0) newMatrix[i - 1][j - 1] += 1;
        if (i > 0 && j < matrix[i].length - 1) newMatrix[i - 1][j + 1] += 1;
        if (i < matrix.length - 1 && j < matrix[i].length - 1)
          newMatrix[i + 1][j + 1] += 1;
        if (i < matrix.length - 1 && j > 0) newMatrix[i + 1][j - 1] += 1;
      }
    }
  }

  return newMatrix;
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ]),
);

module.exports = {
  minesweeper,
};
