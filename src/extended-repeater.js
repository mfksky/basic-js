const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';

  for (let i = 0; i < (options.repeatTimes || 1); i++) {
    let additionStr = '';

    if (options.addition !== undefined) {
      for (let j = 0; j < (options.additionRepeatTimes || 1); j++) {
        if (j === 0) {
          additionStr += options.addition;
        } else {
          additionStr += options.additionSeparator
            ? `${options.additionSeparator}${options.addition}`
            : `|${options.addition}`;
        }
      }
    }

    if (i === 0) {
      result += str + additionStr;
    } else {
      result += options.separator
        ? `${options.separator}${str}${additionStr}`
        : `+${str}${additionStr}`;
    }
  }

  return result;
}

// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: (hint) =>
//     hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER',
// };

console.log(
  repeater('REPEATABLE_STRING', {
    repeatTimes: 2,
    addition: 'ADDITION',
    additionRepeatTimes: 3,
  }),
);

// console.log(
//   repeater('STRING', {
//     repeatTimes: 3,
//     separator: '**',
//     addition: 'PLUS',
//     additionRepeatTimes: 3,
//     additionSeparator: '00',
//   }),
// );

module.exports = {
  repeater,
};
