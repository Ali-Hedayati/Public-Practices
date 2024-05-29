function palindrome(input) {
  let out = true;
  let myArray = Array.from(input.toString());
  // let reverseMyArray = myArray.reverse();
  console.log(myArray);
  // console.log(reverseMyArray);
  for (let i = 0; i < myArray.length; i++) {
    // console.log(reverseMyArray[i]);
    if (myArray[i] !== myArray[myArray.length - i]) {
      console.log("its false");
      out = false;
      break;
    }
  }
  return out;
}

module.exports = palindrome;
console.log(palindrome("1555"));
