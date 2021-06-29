$(document).ready(function () {
  var request = new XMLHttpRequest();
  request.open("GET", "http://www.geoplugin.net/xml.gp?ip=22.178.223.214");
  request.send();

  request.onload = function () {
    var response = request.responseXML;
    console.log("onload");
    console.log(response);
    var country = response.querySelector("geoplugin_countryName");
    $("#countryName").html(country);
  };
});
