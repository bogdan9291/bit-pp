// Write a program that calculates a number of digits of a given number.

function numOfDigits(a) {
  if(a >= 0 && a <= 9) {
    return 'That is a 1 digit number';
  } else if (a >= 10 && a <= 99) {
    return 'That is a 2 digit number';
  } else if (a >= 100 && a <= 999) {
    return 'That is a 3 digit number';
  } else {
    return 'That number has 4 or more digits';
  }
}

console.log(numOfDigits(4444));