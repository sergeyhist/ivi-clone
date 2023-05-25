import { NextRouter } from "next/router";
import { defaultFilters } from "./filtersVariables";
import { IFilters } from "/src/types/IFilter";

export const getFiltersFromRoute = (router: NextRouter): IFilters => {
  const result: IFilters = { ...defaultFilters };

  Object.keys(result).forEach((key) => {
    result[key] = router.query[key] || [];
  });

  return result;
};
