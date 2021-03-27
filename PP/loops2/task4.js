//Write a program that finds the first element larger than //minimum and prints out its value.

var a = [4, 2, 2, -1, 6];

var smallest = a[0];
var smaller = a[0];

for(var i = 0; i < a.length; i++) {
  if(a[i] < smaller) {
    if(a[i] < smallest) {
      smaller = smallest;
      smallest = a[i];
      console.log(smallest);
    }
  }
}




