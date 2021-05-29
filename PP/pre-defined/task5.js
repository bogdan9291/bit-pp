// Write a program that calculates a number of float values in the array.

var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function floatOrNot(a) {
  var storeFloat = 0;

  for(var i = 0; i < a.length; i++) {
    var array = a[i];
    
    if(parseFloat(array) === array) {
      storeFloat++;
    }
  }

  return storeFloat;
}

console.log(floatOrNot(array));