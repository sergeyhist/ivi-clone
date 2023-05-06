import { IGenre } from "./IGenre";

export interface IMovie {
  film_id: string;
  name_ru: string;
  name_en: string;
  description: string;
  year: number;
  country: string;
  rating: number;
  assessments: number;
  reviews: number;
  age_limit: number;
  duration: number;
  img: string;
  trailers: ITrailer[];
  genres: IGenre[];
  qualities: IQuality[];
  languagesAudio: ILanguage[];
  languagesSubtitle: ILanguage[];
  [key: string]: string | unknown;
}

export interface ITrailer {
  trailer_id: string;
  trailer: string;
  img: string;
  date: string;
}

export interface IQuality {
  quality_id: string;
  quality: string;
}

export interface ILanguage {
  language_id: string;
  language: string;
}
