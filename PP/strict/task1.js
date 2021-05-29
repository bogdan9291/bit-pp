// Write a function to check whether the `input` is a string or not.

"use strict"

function str(a) {
  if(typeof a === "string") {
    return true;
  } else {
    return false;
  }
}

console.log(str(null));

