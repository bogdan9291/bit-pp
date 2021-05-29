// Write a program that calculates a number of integer values in the array.

var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];

function intOrNot(a) {
  var storeInt = 0;

  for(var i = 0; i < a.length; i++) {
    var array = a[i];
    
    if(parseInt(array, 10) === array) {
      storeInt++;
    }
  }

  return storeInt;
}

console.log(intOrNot(array));