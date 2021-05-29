// Write a function to count the number of letter occurrences in a string.

"use strict"

var randomString = "My random stringnnnn";

function count(a, b) {
  var num = 0;

  for(var i = 0; i <= a.length; i++) {
    var char = a[i];
    if(char === b) {
      num++;
    }
  }

  return num;
}

console.log(count(randomString, "n"));