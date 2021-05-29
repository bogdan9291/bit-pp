// Write a program that checks if a given number is a three digit long number.


function threeDigits(num) {
  if (num > 99 && num <= 999) {
    return 'The number is 3 digits long.';
  } else {
    return 'The number is not 3 digits long';
  }
}

console.log(threeDigits(1000));