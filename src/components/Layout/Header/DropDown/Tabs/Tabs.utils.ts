import { DropDownType } from "/src/components/Layout/Header/Header.utils";

export const moviesTabsHrefs = [
  "https://www.ivi.ru/new/movie-new",
  "https://www.ivi.ru/collections",
  "https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready",
  "https://www.ivi.ru/new/soon-ivi",
  "https://www.ivi.ru/trailers",
  "https://www.ivi.ru/goodmovies",
  "https://www.ivi.ru/collections/movies-hd",
  "https://www.ivi.ru/collections/vyibor-ivi",
  "https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection",
  "https://www.ivi.ru/collections/filmyi-amediateka",
  "https://www.ivi.ru/collections/best-movies",
  "https://www.ivi.ru/collections/ivi-originals",
];

export const seriesTabsHrefs = [
  "https://www.ivi.ru/new/series-new",
  "https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready",
  "https://www.ivi.ru/collections/series-hd",
  "https://www.ivi.ru/collections/tvshow-free?sort=new",
  "https://www.ivi.ru/collections/serialyi-amediateka",
  "https://www.ivi.ru/collections/series-paramount-play",
];

export const cartoonsTabsHrefs = [
  "https://www.ivi.ru/new/animation-new",
  "https://www.ivi.ru/collections/cartoons-hd",
  "https://www.ivi.ru/collections/animation-paramount-play/page2",
  "https://www.ivi.ru/collections/dreamworks-cartoons",
  "https://www.ivi.ru/collections/ctc-kids",
];

export const getTabsHrefs = (genre: DropDownType): string[] => {
  switch (genre) {
    case "movies":
      return moviesTabsHrefs;
    case "series":
      return seriesTabsHrefs;
    default:
      return cartoonsTabsHrefs;
  }
};
