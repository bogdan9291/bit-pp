var changeBG = function () {
  document.body.classList.toggle("blue");
};

var turnOff = function () {
  var buttonChange = document.getElementsByClassName("bgChange")[0];
  var buttonTurnOff = document.getElementsByClassName("turnOff")[0];
  var check = buttonChange.hasAttribute("onclick");

  if (check) {
    buttonChange.removeAttribute("onclick");
    buttonTurnOff.textContent = "Turn ON!";
  } else {
    buttonChange.setAttribute("onclick", "changeBG()");
    buttonTurnOff.textContent = "Turn OFF!";
  }
};
