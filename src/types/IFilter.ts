export interface IFilters {
  [key: string]: string | string[];
  genres: string[] | string;
  countries: string[] | string;
  year: string[] | string;
  rating: string[] | string;
  assessments: string[] | string;
  actor: string[] | string;
  director: string[] | string;
}

export type IFilterType =
  | "genres"
  | "countries"
  | "year"
  | "rating"
  | "assessments"
  | "actor"
  | "director";
