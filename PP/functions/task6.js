// Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

function chart(a, b, c) {
  var result = "";
  for(var i = 1; i <= a && i <= b && i <= c; i++) {
    result += "*";
  }
  return result;
}

console.log(chart(5));