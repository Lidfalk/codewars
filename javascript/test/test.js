

const assert = require('chai').assert;
const kata = require('../kata');

describe('Codewars katas', () => {
  it('Unique In Order', () => {
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
  
  it('Is Isogram', () => {
    assert.equal(kata.isIsogram('ABCD'), true)
    assert.equal(kata.isIsogram('Dermatoglyphics'), true );
    assert.equal(kata.isIsogram('isogram'), true );
    assert.equal(kata.isIsogram('aba'), false, 'same chars may not be adjacent' );
    assert.equal(kata.isIsogram('moOse'), false, 'same chars may not be same case' );
    assert.equal(kata.isIsogram('isIsogram'), false );
    assert.equal(kata.isIsogram(''), true, 'an empty string is a valid isogram' );
  });
  
  it('Get Sum', () => {
    assert.equal(-1, kata.getSum(0, -1));
    assert.equal(1, kata.getSum(0, 1));
    assert.equal(2, kata.getSum(-1, 2));
    assert.equal(-3, kata.getSum(-2, -1));
    assert.equal(-9, kata.getSum(-2, -4));
  });
  
  it('People In Line', () => {
    assert.equal('YES', kata.tickets([25, 25, 50, 50]));
    assert.equal('NO', kata.tickets([25, 100]));
    assert.equal('YES', kata.tickets([25, 50, 25, 100]));
  });

  it('Should print diamond', () => {
    assert.equal(kata.diamond(3), ' *\n***\n *\n');
    assert.equal(kata.diamond(5), '  *\n ***\n*****\n ***\n  *\n');
    assert.equal(kata.diamond(2), null);
    assert.equal(kata.diamond(-3), null);
    assert.equal(kata.diamond(0), null);
  });
  
  it('should return correct text', () => {
    assert.equal(kata.likes([]), 'no one likes this');
    assert.equal(kata.likes(['Peter']), 'Peter likes this');
    assert.equal(kata.likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.equal(kata.likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.equal(kata.likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});

