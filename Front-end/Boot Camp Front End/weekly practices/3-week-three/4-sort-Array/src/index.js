function doubleSort(...args) {
  let out = {
    ascending: [],
    descending: [],
  };
  let TheNumbers = [];
  let TheBig;
  for (let arg of args) {
    TheNumbers.push(arg);
  }

  for (let j = 0; j < TheNumbers.length; j++) {
    for (let k = j + 1; k < TheNumbers.length; k++) {
      if (TheNumbers[j] < TheNumbers[k]) {
        TheBig = TheNumbers[k];
        TheNumbers[k] = TheNumbers[j];
        TheNumbers[j] = TheBig;
      }
    }
  }
  let other = [...TheNumbers];
  out.descending = TheNumbers;
  out.ascending = other.reverse();
  return out;
}

module.exports = doubleSort;
console.log(doubleSort(1, 2, 3, 4, 8, 6, 10, 9, -1, 20, 121, 123, 122, 122));
