var season = 4;

switch (season) {
  case 1:
  case 2:
  case 3:
    console.log("It's winter!");
    break;
  case 4:
  case 5:
  case 6:
    console.log("It's spring!");
    break;
  case 7:
  case 8:
  case 9:
    console.log("It's summer!");
    break;
  case 10:
  case 11:
  case 12:
    console.log("It's autumn!")
  default:
    console.log("Input must be a number between 1 and 12.");
}
