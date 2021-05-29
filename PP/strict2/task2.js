// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

"use strict"

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function join(a) {
  var newString = "";

  for(var i = 0; i < a.length; i++) {
    var element = a[i];

    if(isFinite(element) && element !== null) {
      newString += element;
    }
  }

  return newString;
}

console.log(join(array));
