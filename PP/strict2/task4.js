// Write a function that reverses a number. The result must be a number.

var num = 12345678;

function reverse(a) {
  var reversed = 0;
  a += "";

  for(var i = a.length - 1; i >= 0; i--) {
    reversed += a[i];
  }

  return parseInt(reversed);

}

console.log(reverse(num));