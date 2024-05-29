function fizz_buzz(numbers) {
  let output = [];
  console.log(typeof numbers.length);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 15 == 0) {
      output[i] = "fizzbuzz";
    } else if (numbers[i] % 3 == 0) {
      output[i] = "fizz";
    } else if (numbers[i] % 5 == 0) {
      output[i] = "buzz";
    } else {
      output[i] = numbers[i];
    }
  }

  return output.toString();
}

module.exports = fizz_buzz;
console.log(fizz_buzz([7, 15]));
