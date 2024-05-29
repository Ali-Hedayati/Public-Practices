function isPrime(num) {
  let isPrimen = true;
  if (num == 1) {
    isPrimen = false;
  }

  for (let i = 1; i < num - 1; i++) {
    if (num % (num - i) == 0) {
      isPrimen = false;
    }
  }
  return isPrimen;
}
module.exports = isPrime;
