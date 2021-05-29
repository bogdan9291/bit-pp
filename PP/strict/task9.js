// Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.


"use strict"

var randomString = "My random string";

function replace(str, sep) {
  var newString = "";

  if(sep === undefined) {
    sep = "-";
  }

  for(var i = 0; i < str.length; i++) {
    var char = str[i];
    
    if(char === " ") {
      newString += sep;
    } else {
      newString += char;
    }
  }
  
  return newString;
}

console.log(replace(randomString, "%"));