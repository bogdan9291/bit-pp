// Write a function that concatenates a given string n times (default is 1).

"use strict"

var ha = "Ha";

function conc(a, b) {
  for(var i = 1; i <= b; i++) {
    ha += a;
  }

  return ha;
}

console.log(conc(ha, 13));