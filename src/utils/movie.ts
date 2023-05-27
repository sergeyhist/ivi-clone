import { IMovie } from "/src/types/IMovie";
import { TFunction } from "next-i18next";

export const getFormateNumber = (number: number): string => {
  return number.toLocaleString("ru-RU");
};

export const getMovieName = (movie: IMovie, locale = "en"): string => {
  return String(movie["name_" + locale]);
};

export const getFormateDate = (date: Date, t: TFunction): string => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${t(`movie:months.${monthIndex}`)} ${year}`;
};

export const getAgeImg = (age: number): string => {
  switch (age) {
    case 0:
      return "/images/age0.svg";
    case 6:
      return "/images/age6.svg";
    case 12:
      return "/images/age12.svg";
    case 16:
      return "/images/age16.svg";
    case 18:
      return "/images/age18.svg";
    default:
      return "/images/age16.svg";
  }
};

export const getMovieCounty = (movie: IMovie): string => {
  return movie.countries[0].slug;
};
