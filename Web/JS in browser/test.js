function printHello() {
  console.log("Hello");
}

printHello();

function printBrowserInfo() {
  console.log(navigator.platform);
  console.log(navigator.appVersion);
  console.log(navigator.vendor);
}

printBrowserInfo();

function isOnline() {
  if(navigator.onLine) {
    console.log("Online");
  } else {
    console.log("Offline");
  }
}

isOnline();

function getScreenDimension() {
  console.log("Available screen dimesions: " + screen.availWidth + "x" + screen.availHeight);
}

getScreenDimension();

function urlData() {
  console.log("Full url address: " + location.href);
  console.log("Host name: " + location.hostname);
  console.log("Used protocol: " + location.protocol);
  console.log("Request params: " + location.search);
}

urlData();

function reloadPage() {
  location.reload();
}

function redirectPage(address) {
  location.assign(address);
}

function storeData(key, value) {
  localStorage.setItem(key, value);
}

storeData("name", "Bogdan");

function readData(key) {
  var data = localStorage.getItem(key) || "There is no data";
  console.log(data);
}

console.log(readData("name"));

