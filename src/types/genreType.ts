export type Genres = 'movie' | "series" | "cartoons" | "";

export interface GenreLinks{
    title: string,
    links: string[],
}

export interface GenreFilters{
    genres: string[],
    countries: string[],
    years: string[],
}