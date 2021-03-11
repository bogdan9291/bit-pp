/*
var num1 = 4;
var num2 = 2;
var operation = "/";

switch (operation) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    if (num1 === 0 || num2 === 0) {
      console.log("Cannot divide by zero!")
    } else {
      console.log(num1 / num2);
    }
    break;
}

*/

var num1 = 4;
var num2 = 0;
var operation = "/";

switch (operation) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    (num1 === 0 || num2 === 0) ? console.log("Cannot divide by zero") : console.log(num1 / num2);
    break;
}