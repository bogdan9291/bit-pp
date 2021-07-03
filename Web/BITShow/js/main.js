var $input = $("input");
var $cardHolder = $(".cardHolder");
var $errorElement = $(".alert");
var showsURL = "http://api.tvmaze.com/shows/";
var showList = [];

$(document).ready(function () {
  top50();
});

function search(inputVal) {
  $.ajax({
    url: "http://api.tvmaze.com/search/shows?q=" + inputVal,
    method: "GET",
  }).done(function (result) {
    showList = [];
    $cardHolder.html("");
    result.forEach(function (item) {
      showList.push(item);
      console.log(item);
    });
    console.log(showList.length);
    getShows();
  });
}

function getShows() {
  showList.forEach(function (item, i) {
    var card = $(`
      <div class="col-4">
        <div class="card">
          <img src='${item[i].show.image.original}'>
          <div class="card-body">
          <h5 class="card-title">${item[i].show.name}</h5>
          </div>
        </div>
      </div>`);

    $cardHolder.append(card);
  });
}

function top50() {
  $.ajax({
    url: "http://api.tvmaze.com/shows",
    method: "GET",
  }).done(function (result) {
    result.sort(function (a, b) {
      return b.rating.average - a.rating.average;
    });

    for (var i = 0; i < 50; i++) {
      showList.push(result[i]);
    }

    console.log(showList);
    displayTop50();
  });
}

function displayTop50() {
  showList.forEach(function (item, i) {
    var card = $(`
      <div class="col-4">
        <div class="card">
          <img src='${item[i].image.original}'>
          <div class="card-body">
          <h5 class="card-title">${item[i].name}</h5>
          </div>
        </div>
      </div>`);

    $cardHolder.append(card);
  });
}
