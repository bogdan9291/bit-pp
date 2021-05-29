// Write a program that calculates the sum of odd elements of a given array.


var a = [1, 2, 3, 4];
var sum = 0;


function calc(a) {
  for(var i = 0; i < a.length; i++) {
    if(a[i] % 2 > 0) {
      sum += a[i];
    } 
  }
  return sum;
}


console.log(calc(a));