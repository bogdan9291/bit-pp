// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"use strict"

var string = "My random string";

function convert(a) {
  var newArray = [];

  for(var i = 0; i < a.length; i++) {
    var char = a[i];

    if(char === " ") {
      newArray[newArray.length] = null;
    } else {
      newArray[newArray.length] = char;
    }
  }

  return newArray;
}

console.log(convert(string));