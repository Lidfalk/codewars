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
    var lowerCaseStr = str.toLowerCase();
    var map = {};
    for (var index = 0; index < lowerCaseStr.length; index++) {
      if (map.hasOwnProperty(lowerCaseStr[index])) {
        return false;
      }
      map[lowerCaseStr[index]] = 1;
    }
    return true;
  },
  GetSum: ( a, b ) => {
    let result = 0;
   // loop from the min to the max argument
   for (var index = Math.min(a, b); index <= Math.max(a, b); index++) {
     result += index;
   }
   return result;
  },
  tickets: (peopleInLine) => {
    var bills = {'25': 0, '50': 0};
    for (let i = 0; i < peopleInLine.length; i++) {
      if (peopleInLine[i] / 25 == 1) {
        bills['25'] +=1;
        continue;
      } else if (peopleInLine[i] / 25 == 2) {
        if(bills['25'] > 0)
        {
          bills['25'] -=1;
          bills['50'] +=1;
          continue;
        }
        return 'NO';
      } else {
        if (bills['50'] > 0 && bills['25'] > 0) {
          bills['50'] -=1;
          bills['25'] -=1;
          continue;
        } else if (bills['25'] >=3) {
          bills['25'] -=3;
          continue;
        }
        return 'NO';
      }
    }
    return 'YES';
  },
  diamond: (n) => {
    if (n % 2 === 0 || n < 0)
      return null
    let result = ''
    var middle = Math.round(n/2 + 0.6)
    
    for (let i = -middle+1; i < middle; i++) {
      let spaces = Math.abs(i);
      let stars = n - Math.abs(i)*2;
      result += `${' '.repeat(spaces)}${'*'.repeat(stars)}\n` 
    }
    return result;
  }
};


