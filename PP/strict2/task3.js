// [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null] -&gt; [15, -22, 47]

"use strict"

var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function filter(a) {
  var newArray = [];

  for(var i = 0; i < a.length; i++) {
    var arrayItem = a[i];
    
    if(arrayItem) {
      newArray[newArray.length] = arrayItem;
    }
  }
  
  return newArray;
  
}

console.log(filter(array));