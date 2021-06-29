//Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive.

var array = ["JavaScript", "Programming", "fun", "product"];

function findSubstring(arr) {
  var subStrFound = [];

  for (var i = 0; i < arr.length; i++) {
    var lowerCase = arr[i].toLowerCase();
    var subString = lowerCase.substring(0, 3);

    if (subString === "pro") {
      subStrFound.push(arr[i]);
    }
  }

  return subStrFound;
}

console.log(findSubstring(array));
