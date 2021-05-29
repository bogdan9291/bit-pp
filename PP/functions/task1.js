// Write a program that calculates the maximum of two given numbers.

function calcMax(a, b) {
  var max;

  if(a > b) {
    max = a;
  } else {
    max = b;
  }

  return max;
}

console.log(calcMax(10, 11));
