var string = 'abc';
var result = "";

function conc(a, b) {

  for(var i = 1; i <= b; i++) {
    result += a;
  }

  return result;

}

console.log(conc(string, 1));