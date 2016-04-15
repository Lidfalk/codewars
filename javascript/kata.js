'use strict'; // eslint-disable-line

module.exports = {
  uniqueInOrder: (iterable) => {
    let addedItem;
    const result = [];
    for (let index = 0; index < iterable.length; index++) {
      const element = iterable[index];
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
  }

};
