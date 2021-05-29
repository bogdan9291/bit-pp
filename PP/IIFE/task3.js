// Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.

// Input: prograMming
// Output: progra**ing, 2

(
  function(input) {
    var newString = "";
    var replacedCount = 0;
    
    for(var i = 0; i < input.length; i++) {
      var char = input[i];
  
      if(char === "m" || char === "M") {
        newString += "*";
        replacedCount++;
      } else {
        newString += char;
      }
    }
    console.log(newString + ", " + replacedCount);
})("prograMming");