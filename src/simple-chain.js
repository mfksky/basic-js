const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (
      typeof position === 'number' &&
      position > 0 &&
      position <= this.chain.length
    ) {
      this.chain = [
        ...this.chain.slice(0, position - 1),
        ...this.chain.slice(position),
      ];
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.map((link) => `( ${link} )`).join('~~');
    this.chain = [];
    return result;
  },
};

console.log(
  chainMaker
    .addLink('first')
    .addLink('second')
    .removeLink(1)
    .addLink('third')
    .reverseChain()
    .finishChain(),
);

module.exports = {
  chainMaker,
};
