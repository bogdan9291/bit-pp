function getTextNode() {
  var list = document.querySelector("ul");
  var listItem = list.firstElementChild;

  alert(listItem.textContent);
}

//getTextNode();

function replaceText(text) {
  var list = document.querySelector("ul");
  var lastItem = list.lastElementChild;

  lastItem.textContent = text;
}

//replaceText("some text");
