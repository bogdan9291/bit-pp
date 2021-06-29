function getScreenDimension() {
  console.log(
    "Available screen dimesions: " +
      screen.availWidth +
      "x" +
      screen.availHeight
  );
}

getScreenDimension();

function urlData() {
  console.log("Full url address: " + location.href);
  console.log("Host name: " + location.hostname);
  console.log("Used protocol: " + location.protocol);
  console.log("Request params: " + location.search);
}

urlData();

function storeData(key, value) {
  localStorage.setItem(key, value);
}

storeData("name", "Bogdan");
storeData("age", "30");

function readData(key) {
  var data = localStorage.getItem(key) || "There is no data";
  console.log(data);
}

readData("name");
readData("age");

localStorage.removeItem("name");

readData("name");
readData("age");

function storeSession(key, value) {
  sessionStorage.setItem(key, value);
}

storeSession("name", "Bogdan");

function readSession(key) {
  var data = sessionStorage.getItem(key) || "There is no data";
  console.log(data);
}

readSession("name");

function newAlert() {
  alert("Welcome!");
  var question = prompt("How are you today?");

  var confirmed = confirm("We will submit this answer now! " + question);

  if (confirmed == true) {
    alert("Success!");
  }
}

newAlert();
