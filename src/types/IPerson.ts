import {IMovie} from "/src/types/IMovie";

export interface IPerson {
  person_id: string
  first_name_ru: string
  last_name_ru: string
  first_name_en: string
  last_name_en: string
  img: string
  movieRoles: IMovieRole[]
  movies: IMovie[]
}

export interface IMovieRole {
  movie_role_id: string
  movie_role: string
  slug: string
}
