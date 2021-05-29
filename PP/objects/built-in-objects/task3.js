// Write a function that checks if a given array has odd number of /////elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

var array = [1, 2, 9, 2, 1];

function oddOrNo(arr) {
  if(arr.length % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(oddOrNo(array));


