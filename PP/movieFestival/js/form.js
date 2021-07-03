var createdMovieList = [];

// Select form inputs for create movie
var $movieTitle = document.querySelector("#movieTitle");
var $movieLength = document.querySelector("#movieLength");
var $movieGenre = document.querySelector("#movieGenre");
var $createMovie = document.querySelector("#createMovie");
var $error = document.querySelector("#error");
var $movieList = document.querySelector("#movieList");

// Select form inputs for create program
var $programDate = document.querySelector("#date");
var $createProgram = document.querySelector("#createProgram");
var $programsList = document.querySelector("#programsList");

function resetMovieForm() {
  $movieTitle.value = "";
  $movieLength.value = "";
}

function renderMovieList(movies) {
  var list = "";

  movies.forEach(function (movie) {
    list += "<li>" + movie.getData() + "</li>";
  });

  $movieList.innerHTML = list;
}

var createMovie = function () {
  // Get form input value for create movie
  var title = $movieTitle.value;
  var length = Number.parseInt($movieLength.value);
  var genre = $movieGenre.value;

  // Error handling for missing movie title info
  if (!title) {
    $error.textContent = "Title is required";
    return;
  } else {
    $error.textContent = "";
  }

  // Create new objects from constructor functions
  var selectedGenre = new Genre(genre);
  var newMovie = new Movie(title, selectedGenre, length);

  createdMovieList.push(newMovie);
  console.log(createdMovieList);
  console.log(newMovie);

  // Add movie data to movie list
  renderMovieList(createdMovieList);
  // Reset form
  resetMovieForm();
};

var createProgram = function () {
  var date = document.querySelector("#date").value;
  var numOfMovies = createdMovieList.length;

  var newProgram = new Program(date);
  console.log(newProgram);

  $programsList.innerHTML += "<li>" + newProgram.getData() + "</li>";
};

$createMovie.addEventListener("click", createMovie);
$createProgram.addEventListener("click", createProgram);
