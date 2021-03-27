/*
var a = 10, b = 5;
var result = a || b++;
console.log(a, b);
console.log(a, b);
*/

/*    
var n = 10;
n *= 4;
console.log(n);
*/

/*
var a = [[1,2,3], [4,5,6],8,[9,10]];
console.log(a[3][0]);
*/

/*
console.log(typeof typeof 1);
*/

/*
var x = [1,8,9,9,2];
console.log(x[13]);
*/

/*
console.log(2 > 10 ? 'two' : 5 > 3  ? 'five' : 'three');
*/

/*
var a = 12;
var result = 2;

if (a > 10) {
  result = result + 2;
} else {
  result = result - 2;
}

console.log(result);
*/

/*
console.log(2e2 + 1);
*/

/*
var a = 4;
var b = 3;

if(a = b) {
  console.log("The numbers are equal!");
} else {
  console.log("Nope, they aren't");
}
*/

/*
console.log("Good morning!");
*/

/*
var a = [2, 3, 'abc', 11, -7];
console.log(a[a.length - 1]);
*/

/*
console.log(typeof 2 + 3);
*/

/*
console.log(2 < 3 < 1);
*/

/*
var value = 2;

switch (value) {
  case 2:
    console.log('2');
  case 3:
    console.log('3');
  case '2':
    console.log('Hmmm');
    break;
  default:
    console.log('~*~');
}
*/

/*
console.log(2 < 3 + 5);
*/

/*
var array = ['s', 'c', 'r', 'i', 'p', 't'];
array.length = 0;
console.log(array);
*/

/*
var x = 1, y = 3, z = 8;
x = y = z = 8;
console.log(x, y, z);
*/

/*
console.log(10 * 'Abc');
*/

/*
console.log([2, 3, 4] === [2, 3, 4]);
*/

/*
var x = 10;
var y = 5;
console.log(x + "y = " + (x+y));
*/

/*
console.log("312" === 312);
*/

/*
var x;
console.log(x);
*/

/*
var x = 10;
var y = 5;
console.log(x + "y = " + x + y);
*/


// var array = ['abck', 'ef', 'ghi', 'jkl'];
// console.log(array[2]);

var a = [4, 5, 6, 2];
var b = [3, 8, 11, 9];

var newArray = a;

for (var i = 0; i < b.length; i++) {
  newArray[newArray.length] = b[i];
}

console.log(newArray);


