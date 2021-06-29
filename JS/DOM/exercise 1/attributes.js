function required() {
  var elements = document.getElementsByTagName("input");

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].hasAttribute("required")) {
      if (elements[i].value === "") {
        elements[i].style.border = "1px solid red";
      }
    }
  }
}

