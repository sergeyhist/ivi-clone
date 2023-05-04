export interface IPerson {
  person_id: string;
  first_name_ru: string;
  last_name_ru: string;
  first_name_en: string;
  last_name_en: string;
  img: string;
  filmRoles: IMovieRole[];
  films: IMovieId[];
}

export interface IMovieId {
  film_id: string;
  [key: string]: string;
}

export interface IMovieRole {
  movie_role_id: string;
  movie_role: string;
  slug: string;
}
