// Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com.

// Input: pera peric
// Output: pera.peric@gmail.com


(
  function(name, surname) {
    console.log(name + "." + surname + "@gmail.com");
  })("pera", "peric");