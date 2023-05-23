import { NextRouter } from "next/router";

export const setQueryParams = (
  router: NextRouter,
  params: { [key: string]: string | string[] }
): void => {
  router.isReady && router.push(
    {
      pathname: router.pathname,
      query: {
        ...router.query,
        ...params,
      },
    },
    undefined,
    {
      scroll: false,
      shallow: true
    }
  );
};
