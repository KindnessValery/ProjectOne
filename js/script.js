const numberOfFilms = +prompt('How many you watch films?', '')

console.log(numberOfFilms)


const personalMovieDB={
    count: numberOfFilms,
    movies: {
        
    },
    actors: {},
    genres: [],
    privat: false
}

const lastFilm=prompt('last watch film','')
const ocenka =prompt('ocenka filma','')

personalMovieDB.movies[lastFilm]=ocenka

console.log(personalMovieDB)