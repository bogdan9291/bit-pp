// Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

"use strict"

function insert(string, stringToInsert, position) {
  
  var newString = "";
  
  for(var i = 0; i < string.length; i++) {
    var char = string[i];

    if(position === undefined) {
      position = 0;
    } 

    if(i !== position) {
      newString += char;
    } else {
      newString = newString + stringToInsert + char ;
    }
  }
  
  return newString;

}

console.log(insert("My random string", "JS ", 15));