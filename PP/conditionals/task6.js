var a = 0;
var b = 6;
var c = 4;

if (a > b && a > c) {
  if (b > c) {
    console.log(a, b, c);
  } else {
    console.log(a, c, b);
  }
} else if (b > a && b > c) {
  if (a > c) {
    console.log(b, a, c);
  } else {
    console.log(b, c, a);
  }
} else if (c > a && c > b)