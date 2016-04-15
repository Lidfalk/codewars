

const assert = require('chai').assert;
const kata = require('../kata');

describe('Codewars', () => {
  it('Unique In Order 1', () => {
    assert.deepEqual(['A', 'B', 'C', 'D', 'A', 'B'], kata.uniqueInOrder('AAAABBBCCDAABBB'));
    assert.deepEqual(['A', 'B', 'C', 'c', 'A', 'D'], kata.uniqueInOrder('ABBCcAD'));
    assert.deepEqual([1, 2, 3], kata.uniqueInOrder([1, 2, 2, 3, 3]));
  });
  
  it('My Parse int', () => {
    assert.equal(kata.myParseInt('1'), 1);
    assert.equal(kata.myParseInt('  1 '), 1);
    assert.equal(kata.myParseInt('08'), 8);
    assert.isOk(isNaN(kata.myParseInt('5 friends')));
    assert.isOk(isNaN(kata.myParseInt('16.5')));
  });
});

