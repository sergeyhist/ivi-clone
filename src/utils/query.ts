import { NextRouter } from "next/router";
import { IFilters } from "../types/IFilter";

export const setQueryParams = (
  router: NextRouter,
  params: IFilters | { [key: string]: string | string[] }
) => {
  router.replace(
    {
      query: {
        ...router.query,
        ...params,
      },
    },
    undefined,
    {
      scroll: false,
      shallow: true,
    }
  );
};
