// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

var a = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function conc(a) {
  var conc = "";
  for(var i = 0; i < a.length; i++) {
    var array = a[i];
    if(array) {
      conc += array;
    }
  }
  return conc;
}

console.log(isNaN(null));