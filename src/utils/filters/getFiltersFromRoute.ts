import { NextRouter } from "next/router";
import { compareFilters } from "./compareFilters";
import {defaultFilters} from "./filtersVariables";
import { store } from "/src/store";
import { setIsMoviesLoading } from "/src/store/slices/filtersSlice";
import { IFilters } from "/src/types/IFilter";

export const getFiltersFromRoute = (
  router: NextRouter,
  filters: IFilters,
  filterCallback: () => void
): IFilters => {
  const result: IFilters = { ...defaultFilters };

  result.genres = router.query.genres ? router.query.genres : result.genres;
  result.countries = router.query.countries
    ? router.query.countries
    : result.countries;
  result.year = router.query.year ? router.query.year : result.year;
  result.rating = router.query.rating ? router.query.rating : result.rating;
  result.assessments = router.query.assessments
    ? router.query.assessments
    : result.assessments;
  result.actor = router.query.actor ? router.query.actor : result.actor;
  result.director = router.query.director
    ? router.query.director
    : result.director;

  if (compareFilters(filters, result)) {
    store.dispatch(setIsMoviesLoading(true));
    filterCallback();
  }
  return result;
};
