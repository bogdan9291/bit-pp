

function WebApp(name, url, technologies, license, stars) {
  this.name = name;
  this.url = url;
  this.technologies = technologies;
  this.license = license;
  this.stars = stars;
}

function mobileApp(name, platforms, license, stars) {
  this.name = name;
  this.platforms = platforms;
  this.license = license;
  this.stars = stars;
}

WebApp.prototype.getData = function () {
  console.log(
    "WebApp: \n" +
      "Name - " +
      this.name +
      ",\n" +
      "URL - " +
      this.url +
      ",\n" +
      "Technologies - " +
      this.technologies +
      ",\n" +
      "License - " +
      this.license +
      ",\n" +
      "Stars - " +
      this.stars
  );
};

WebApp.prototype.reactBased = function () {
  var technologies = this.technologies;
  var reactBased = "No.";
  for (var i = 0; i < technologies.length; i++) {
    if (technologies[i] === "React") {
      reactBased = "Yes.";
    }
  }
  return "React based: " + reactBased;
};

mobileApp.prototype.getData = function () {
  console.log(
    "MobileApp: \n" +
      "Name - " +
      this.name +
      ",\n" +
      "Platforms - " +
      this.technologies +
      ",\n" +
      "License - " +
      this.license +
      ",\n" +
      "Stars - " +
      this.stars
  );
};

mobileApp.prototype.forAndroid = function () {
  var platforms = this.platforms;
  var forAndroid = "No.";
  for (var i = 0; i < platforms.length; i++) {
    if (platforms[i] === "Android") {
      forAndroid = "Yes.";
    }
  }
  return "Android ready: " + forAndroid;
};

var myWebApp = new WebApp(
  "myWebApp",
  "www.mywebapp.com",
  ["React", "PHP", "HTML"],
  "Creative Commons",
  5
);

var myMobileApp = new mobileApp(
  "myMobileApp",
  ["Android", "IOS"],
  "Creative Commons",
  5
);



myWebApp.getData();
console.log(myWebApp.reactBased());

myMobileApp.getData();
console.log(myMobileApp.forAndroid());
