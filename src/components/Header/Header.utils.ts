import {IGenreFilters, IGenreLinks} from "/src/types/IGenre";
import {cartoonsGenres, moviesGenres, seriesGenres} from "/src/locales/genresDropDownData";

export type DropDownType = "movies" | "series" | "cartoons" | "tv" | "notification" | "profile" | "";

export const getGenreLinks = (genre: DropDownType) => {
    switch (genre) {
        case "movies":
            return moviesGenres as IGenreFilters;
        case "series":
            return seriesGenres as IGenreFilters;
        case "cartoons":
            return cartoonsGenres as IGenreFilters;
    }
}

export const getTranslatedFilter = (filter: string)=> {
    switch (filter) {
        case "Жанры":
            return 'genres';
        case "Страны":
            return 'countries';
        case "Годы":
            return 'years';
    }
}

export const getLinksSectionTitles = (title: string, selectedGenre: DropDownType): IGenreLinks => {
    const links = getGenreLinks(selectedGenre)[`${getTranslatedFilter(title)}`] as IGenreFilters;
    return {title, links} as IGenreLinks;
}