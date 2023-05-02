export interface IGenreLinks{
    links: string[],
}

export interface IGenreFilters{
    genres: string[],
    countries: string[],
    years: string[],
}

export interface IGenre {
    genre_id: string;
    genre_ru: string;
    genre_en: string;
    slug: string;
}