// Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

var inputString = "This is an example of a stringaAaAa.";


function string(str) {
  var result = 0;
  for(var i = 0; i <= str.length; i++) {
    if(str[i] == 'a' || str[i] == 'A') {
      result += 1;
    }
  }
  return result;
}

console.log(string(inputString));

/*
function string(str, letter) {
  for(var i = 0; i <= str.length; i++) {
    if(str[i] == letter || str[i] == letter.toUpperCase()) {
      result += 1;
    }
  }
  return result;
}


console.log(string(inputString, 'a'));
*/