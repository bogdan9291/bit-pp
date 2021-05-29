// Write a program to filter out falsy values from the array.

var falsyOrNot = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function filter(a) {
  // Create an empty array to store truthy values
  var truthy = [];
  
  for(var i = 0; i < a.length; i++) {
    // Create a var to store the iterator
    var array = a[i];
    // Asking if the value is true
    if(array) {
      // Add the value to the end of the truthy array
      truthy[truthy.length] = array;
    }
  }

  return truthy;
}

console.log(filter(falsyOrNot));