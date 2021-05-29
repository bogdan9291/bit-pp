// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

"use strict"

var array = ["1", "21", undefined, "42", "1e+3", Infinity];

function filter(a) {
  var newArray = [];

  for(var i = 0; i <= a.length; i++) {
    var arrayIndex = a[i];
    var toNum = parseFloat(arrayIndex)

    if(isFinite(toNum)) {
      newArray[newArray.length] = toNum;
    }
  }

  return newArray;
}

console.log(filter(array));