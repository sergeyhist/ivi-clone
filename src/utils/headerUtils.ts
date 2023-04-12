import {Genres} from "/src/types/genreType";
import {cartoonsGenres, moviesGenres, seriesGenres} from "/src/genres/genresData";

export const getGenreLinks = (genre: Genres):  string[]  =>{
    switch (genre) {
        case "movie": return moviesGenres;
        case "series": return seriesGenres;
        case "cartoons": return cartoonsGenres;
    }
}