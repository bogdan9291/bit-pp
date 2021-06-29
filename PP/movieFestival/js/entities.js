function Genre(name) {
  this.name = name;

  this.getData = function () {
    return (
      this.name.charAt(0) + this.name.charAt(this.name.length - 1).toUpperCase()
    );
  };
}

function Movie(title, genre, length) {
  this.title = title;
  this.genre = genre;
  this.length = length;

  this.getData = function () {
    return this.title + ", " + this.length + ", " + this.genre.getData();
  };
}

function Program(date, listOfMovies) {
  this.date = date;
  this.listOfMovies = listOfMovies;

  this.addMovie = function (movie) {
    this.listOfMovies.push(movie);
  };

  this.totalLength = function () {
    var calculateLength = 0;
    for (var i = 0; i < this.listOfMovies.length; i++) {
      calculateLength += this.listOfMovies[i].length;
    }
    return calculateLength;
  };

  this.getData = function (movieData) {
    return (
      this.date +
      "," +
      " Program length: " +
      this.totalLength() +
      " minutes " +
      "\n" +
      "\t\t\t" +
      movieData
    );
  };
}

function Festival(name, numOfMovies) {
  this.name = name;
  this.listOfPrograms = [];
  this.numOfMovies = numOfMovies;

  this.addProgram = function (program) {
    this.listOfPrograms.push(program);
  };
}
