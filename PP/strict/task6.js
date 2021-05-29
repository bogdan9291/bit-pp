// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.

"use strict"

var randomString = "My random stringm";

function last(a, b) {
  var position = -1;

  for(var i = 0; i <= a.length; i++) {
    var char = a[i];

    if(char === b) {
      position = i + 1;
    } 
  }

  return position;
}

console.log(last(randomString, "m"));