var num = 0;

for(var i = 1; i <= 15; i++) {
  num = num + 1;
  if (num % 2 === 0) {
    console.log(num + " is even.");
  } else {
    console.log(num + " is odd.");
  }
}