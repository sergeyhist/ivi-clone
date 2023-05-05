export interface IFilters {
  [key: string]: string | string[];
  genres: string[] | string;
  country: string[] | string;
  year: string;
  rating: string;
  assessments: string;
}
