export interface IFilters {
  [key: string]: string | string[];
  genres: string[] | string;
  countries: string[] | string;
  year: string;
  rating: string;
  assessments: string;
}
