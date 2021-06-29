$(document).ready(function () {
  console.log("Hello, world!");

  $("li:first").addClass("border-bottom");
  $("li").css("text-transform", "uppercase");
  $("li.active").css("color", "red");
  $("li:nth-child(2)").css({ "background-color": "green", color: "pink" });
});
