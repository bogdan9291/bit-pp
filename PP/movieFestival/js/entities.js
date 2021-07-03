function Genre(name) {
  this.name = name;
}

Genre.prototype.getData = function () {
  return (
    this.name.charAt(0) + this.name.charAt(this.name.length - 1).toUpperCase()
  );
};

function Movie(title, genre, length) {
  this.title = title;
  this.genre = genre;
  this.length = length;
}

Movie.prototype.getData = function () {
  return this.title + ", " + this.length + ", " + this.genre.getData();
};

function Program(date) {
  this.date = date;
  this.listOfMovies = [];
}

Program.prototype.addMovie = function () {
  this.listOfMovies.push(movie);
};

Program.prototype.totalLength = function () {
  var calculateLength = 0;
  for (var i = 0; i < this.listOfMovies.length; i++) {
    calculateLength += this.listOfMovies[i].length;
  }
  return calculateLength;
};

function Festival(name, numOfMovies) {
  this.name = name;
  this.listOfPrograms = [];
  this.numOfMovies = numOfMovies;
}

Festival.prototype.addProgram = function (program) {
  this.listOfPrograms.push(program);
};
