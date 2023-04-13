import {GenreFilters, GenreLinks, Genres} from "/src/types/genreType";
import {cartoonsGenres, moviesGenres, seriesGenres} from "/src/locales/genresData";

export const getGenreLinks = (genre: Genres): GenreFilters => {
    switch (genre) {
        case "movie":
            return moviesGenres as GenreFilters;
        case "series":
            return seriesGenres as GenreFilters;
        case "cartoons":
            return cartoonsGenres as GenreFilters;
    }
}

export const getTranslatedFilter = (filter: string):string => {
    switch (filter) {
        case "Жанры":
            return 'genres';
        case "Страны":
            return 'countries';
        case "Годы":
            return 'years';
    }
}

export const getLinksSectionTitles = (title:string,selectedGenre:Genres):GenreLinks=>{
    const links = getGenreLinks(selectedGenre)[`${getTranslatedFilter(title)}`];
    return {title, links } as GenreLinks
}