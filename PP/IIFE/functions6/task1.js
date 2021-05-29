// Write a function to count vowels in a provided string. Vowels are a,  e, i, o, and u as well as A,E, I, O, and U.

var vowels = ['a', 'e', 'i', 'o', 'u'];
var string = "Count vowels in this string.";

function countVowels(str) {
  var count = 0;

  for(var i = 0; i < str.length; i++) {
    var char = str[i];
    
    for(var j = 0; j <= vowels.length; i++) {
      var vowel = vowels[i];

      if(char === vowel) {
        count++;
      }
    }
  }

  return count;
}

console.log(countVowels(string));
