// Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3

/*
var a = [2, 4, 7, 8, 7, 7, 1, 7, 7, 7];
var e = 7;
var result = 0;

for(var i = 0; i < a.length; i++) {
  if (a[i] === e) {
    result += 1;
  }
}

console.log(result);
*/

var array = [2, 4, 7, 8, 7, 7, 1, 7];

function count(a, b) {
  var result = 0;
  for(var i = 0; i < a.length; i++) {
    if (a[i] === b) {
      result += 1;
    }
  }
  return result;
}

console.log(count(array, 7));



