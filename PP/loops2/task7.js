var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

var newArray = [];

for(var i = 0; i < a.length; i++) {
  newArray[newArray.length] = a[i];
  newArray[newArray.length] = b[i];
}

console.log(newArray);