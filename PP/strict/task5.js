// Write a function to find the position of the first occurrence of a character in a string. The result should be the position of character. If there are no occurrences of the character, the function should return -1.

"use strict"

var randomString = "My random string";

function first(a, b) {
  var position = -1;

  for(var i = 0; i <= a.length; i++) {
    var char = a[i];
    
    if(char === b) {
      position = i;
      break;
    } 
  }

  return position;
}

console.log(first(randomString, "n"));