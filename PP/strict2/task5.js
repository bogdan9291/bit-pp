// Write a function to get the last element of an array. Passing a parameter n will return the last n elements of the array.

"use strict"

var array = [7, 9, 0, -2];

function lastOfN(a, n) {
  var result = [];
  var lastItem = a[a.length - 1];
  
  if(n === undefined) {
    result = lastItem;
  } else {
    for(var i = a.length - 1; i >= a.length - n; i--) {
      if(a[i] === undefined) {
        break;
      } else {
        result[result.length] = a[i];
      }
    }
  }

  return result;

}

console.log(lastOfN(array, 2));