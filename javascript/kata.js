
'use strict'; // eslint-disable-line

module.exports = {
  uniqueInOrder: (it) => {
    let addedItem;
    const result = [];
    for (let index = 0; index < it.length; index++) {
      const element = it[index];
      if (addedItem === element) {
        continue;
      }
      result.push(element);
      addedItem = element;
    }
    return result;
  },
  myParseInt: (str) => {
    const trimmedString = str.trim();
    if (trimmedString.length === 0) {
      return 'NaN';
    }
    for (let index = 0; index < trimmedString.length; index++) {
      if (isNaN(trimmedString[index])) {
        return 'NaN';
      }
    }
    return parseInt(trimmedString, 10);
  },
  isIsogram: (str) => {
    const lowerCaseStr = str.toLowerCase();
    const map = {};
    for (let index = 0; index < lowerCaseStr.length; index++) {
      if (map.hasOwnProperty(lowerCaseStr[index])) {
        return false;
      }
      map[lowerCaseStr[index]] = 1;
    }
    return true;
  },
  getSum: (a, b) => {
    let result = 0;
    // loop from the min to the max argument
    for (let index = Math.min(a, b); index <= Math.max(a, b); index++) {
      result += index;
    }
    return result;
  },
  tickets: (peopleInLine) => {
    const bills = { 25: 0, 50: 0 };
    for (let i = 0; i < peopleInLine.length; i++) {
      if (peopleInLine[i] / 25 === 1) {
        bills[25] += 1;
        continue;
      } else if (peopleInLine[i] / 25 === 2) {
        if (bills[25] > 0) {
          bills[25] -= 1;
          bills[50] += 1;
          continue;
        }
        return 'NO';
      } else {
        if (bills['50'] > 0 && bills['25'] > 0) {
          bills['50'] -= 1;
          bills['25'] -= 1;
          continue;
        } else if (bills['25'] >= 3) {
          bills['25'] -= 3;
          continue;
        }
        return 'NO';
      }
    }
    return 'YES';
  },
  diamond: (n) => {
    if (n % 2 === 0 || n < 0) {
      return null;
    }
    let result = '';
    const middle = Math.round(n / 2 + 0.6);
    
    for (let i = -middle + 1; i < middle; i++) {
      const spaces = Math.abs(i);
      const stars = n - Math.abs(i) * 2;
      result += `${' '.repeat(spaces)}${'*'.repeat(stars)}\n`;
    }
    return result;
  },
  
  likes: (n) => {
    if (n.length === 0) {
      return 'no one likes this';
    }
    let result = `${n[0]}`;
    switch (n.length) {
      case 1:
        result += ' likes this'; break;
      case 2:
        result += ` and ${n[1]} like this`; break;
      case 3:
        result += `, ${n[1]} and ${n[2]} like this`; break;
      default:
        result += `, ${n[1]} and ${n.length - 2} others like this`; break;
    }
    return result;
  }
};


