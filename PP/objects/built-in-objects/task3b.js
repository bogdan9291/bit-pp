//Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message.

var array = [-1, 8.1, 3, 6, 2.3, 44, 2.11, 1];

function countElements(arr) {
  var count = 0;
  var middleElement = parseInt(arr.length / 2);

  if (arr.length % 2 === 0) {
    console.log("This array has even number of elements.");
    return;
  }

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[middleElement]) {
      count++;
    }
  }

  return count;
}

console.log(countElements(array));
