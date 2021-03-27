

var a = [4, 2, 2, -1, 6];
var minValue = a[0];
var index = 0;

for(var i = 0; i < a.length; i++) {
  if (a[i] < minValue) {
    minValue = a[i];
    index = i;
  }
}

console.log(minValue, index);