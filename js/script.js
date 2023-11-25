const numberOfFilms = +prompt('How many you watch films?', '')

console.log(numberOfFilms)


const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
11
const lastFilm=prompt('last watch film','')
const rating =prompt('rating film','')

personalMovieDB.movies[lastFilm]=rating


console.log(personalMovieDB)
