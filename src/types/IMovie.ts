import { ICreator } from "./ICreator";

export interface IMovieLang {
  id: string;
  name: string;
  shortName: string;
}
export interface IMovieCategory {
  id: string;
  name: string;
  route: string;
}

export interface IMovieRating {
  grade: string;
  gradeCategory: string;
  grades: string;
}

export interface IMovie {
  id: string;
  title: string;
  type: string;
  access: string;
  imgUrl: string;
  age: number;
  year: number;
  time: string;
  subtitles: IMovieLang[];
  langs: IMovieLang[];
  qualities: string[];
  rating: IMovieRating;
  creators: ICreator[];
  categories: IMovieCategory[];
  description: string;
  route: string;
}
