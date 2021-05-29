// Write a function to check whether a string is blank or not.

"use strict"

var randomString = "a";

function blankOrNot(a) {
  if (a.length === 0 || a === " ") {
    return true;
  } else {
    return false;
  }
}

console.log(blankOrNot(randomString));