const initalizeDataBase = require("./db/db.connect");
const Movie = require("./models/movies.models");
initalizeDataBase();

//  Find the movie with particular title

async function findAmovieWithTitle(movieTitle) {
  try {
    const getMovieTitle = await Movie.findOne({ title: movieTitle });
    console.log(getMovieTitle);
  } catch (err) {
    console.log(err);
  }
}
// findAmovieWithTitle("Lagaan");

// Get all movies
async function readAllMovies() {
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
  } catch (err) {
    console.log(err);
  }
}
// readAllMovies();

async function getMovieByDirector(directorName) {
  try {
    const movieDirector = await Movie.find({ director: directorName });
    console.log(movieDirector);
  } catch (error) {
    console.log(error);
  }
}
getMovieByDirector("Kabir Khan");
