var array = ['1', 'A', 'B', 'c', 'r', true, NaN, undefined];
var string = '';

for(var i = 0; i < array.length; i++) {
  string = string + ' ' + array[i];
}

console.log(string);