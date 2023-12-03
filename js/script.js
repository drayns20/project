const numberOfFilms = +prompt ('How many filmes you allready watched?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the latest films what you seen?', ''),
      b = prompt('How you evaluate them?', ''),
      c = prompt('One of the latest films what you seen?', ''),
      d = prompt('How you evaluate them?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
