var $input = $("input");
var $cardHolder = $(".cardHolder");
var $errorElement = $(".alert");
var showsURL = "http://api.tvmaze.com/shows/";
var searchURL = "http://api.tvmaze.com/search/shows?q=";
var showList = [];

//ShowInfo page nodes
var $showHeading = $(".showHeading");

$(document).ready(function () {
  top50();

  $input.on("keydown", function (event) {
    if (event.keyCode == 13) {
      var inputValue = $input.val();

      if (!inputValue) {
        $errorElement.text("Input required");
        $errorElement.toggle();
        return;
      }

      search(inputValue);
    }
  });
});

function search(input) {
  $.ajax({
    url: `${searchURL}${input}`,
    method: "GET",
  }).done(function (result) {
    result.forEach(function (item) {
      showList.push(item);
    });
    getShows();
  });
}

function getShows() {
  showList.forEach(function (item) {
    var $card = $(".card");
    var card = $(`
      <div class="col-4">
        <div class="card">
          <img src='${item.image.original}'>
          <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          </div>
        </div>
      </div>`);

    $cardHolder.append(card);

    $card.on("click", function () {
      window.location.href = "showInfo.html";
    });
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

    showTop50();
  });
}

function showTop50() {
  showList.forEach(function (item) {
    var $card = $(".card");
    var card = $(`
      <div class="col-4">
        <div class="card">
          <img src='${item.image.original}'>
          <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          </div>
        </div>
      </div>`);

    $cardHolder.append(card);

    $card.on("click", function () {
      window.location.href = "showInfo.html";
    });
  });
}
