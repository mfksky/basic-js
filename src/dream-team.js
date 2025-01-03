const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members
    .filter((member) => typeof member === 'string')
    .flatMap((member) => member.trim().toUpperCase())
    .sort((a, b) => a.localeCompare(b))
    .map((name) => name[0])
    .join('');
}

module.exports = {
  createDreamTeam,
};
