// Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

var array = ["1", "21", undefined, "42", "1e+3", Infinity];

function conv(a) {
  var output = [];
  for(var i = 0; i < a.length; i++) {
    if(isFinite(parseInt(a[i])))
    output[output.length] = parseFloat(a[i]);
  }
  return output;
}

console.log(conv(array));