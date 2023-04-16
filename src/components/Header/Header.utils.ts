import {GenreFilters, GenreLinks, Genres} from "/src/types/genreType";
import {cartoonsGenres, moviesGenres, seriesGenres} from "/src/locales/genresDropDownData";
import {DropDownType} from "/src/components/Header/Header";

export const getGenreLinks = (genre: DropDownType): GenreFilters => {
    switch (genre) {
        case "movies":
            return moviesGenres as GenreFilters;
        case "series":
            return seriesGenres as GenreFilters;
        case "cartoons":
            return cartoonsGenres as GenreFilters;
    }
}

export const getTranslatedFilter = (filter: string): string => {
    switch (filter) {
        case "Жанры":
            return 'genres';
        case "Страны":
            return 'countries';
        case "Годы":
            return 'years';
    }
}

export const getLinksSectionTitles = (title: string, selectedGenre: DropDownType): GenreLinks => {
    const links = getGenreLinks(selectedGenre)[`${getTranslatedFilter(title)}`] as GenreFilters;
    return {title, links} as GenreLinks;
}