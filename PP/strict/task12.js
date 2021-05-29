// Write a function to calculate how many years there are left until retirement based on the year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.

"use strict"

function calcYearsLeft(yearOfBirth, gender) {
  var thisYear = 2021;
  var retirementYear;

  if(gender === "male") {
    retirementYear = yearOfBirth + 65;
  } else if (gender = "female") {
    retirementYear = yearOfBirth + 60;
  }
  
  var yearsToRetire = retirementYear - thisYear;

  if(yearsToRetire > 0) {
    return "You have " + yearsToRetire + " years left until retirement.";
  } else {
    return "You are already retired.";
  }
}

console.log(calcYearsLeft(1959, "male"));




