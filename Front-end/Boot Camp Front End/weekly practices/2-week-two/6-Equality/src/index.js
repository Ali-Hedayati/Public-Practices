function arrayEquality(arr1, arr2) {
  if (JSON.stringify(arr1) === JSON.stringify(arr2)) {
    return true;
  } else {
    return false;
  }
}

function objectEquality(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) {
    return true;
  } else {
    return false;
  }
}

module.exports = { arrayEquality, objectEquality };

console.log(arrayEquality([1, 2], [1, 2]));
