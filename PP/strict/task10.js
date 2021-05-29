// Write a function to get the first n characters and add “...” at the end of newly created string.

"use strict"

var string = "This is a string"
var dots = "...";

function conc(n, a) {
  var newString = "";
  
  for(var i = 0; i < n; i++) {
    var char = a[i];
    
    newString = newString + char;
  }

  return newString + dots;
}

console.log(conc(7, string));