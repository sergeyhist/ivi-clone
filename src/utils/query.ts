import { NextRouter } from "next/router";

export const setQueryParams = (
  router: NextRouter,
  params: { [key: string]: string | string[] }
): void => {
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
