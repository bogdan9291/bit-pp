// Write a program to check if the
// number is divisible by 3 and 5.
// If it is, print that number.

var num = 15;

if (num % 3 === 0 && num % 5 === 0 || num % 3 === 0 || num % 5 === 0) {
  console.log(num);
} else {
  console.log("Not gonna work!");
}