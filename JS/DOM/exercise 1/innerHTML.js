function transform (a,b,f) {
  var result;
  result=f(a) + f(b);
  console.log(result);
}

transform(2,4, function(x){return x+1;});