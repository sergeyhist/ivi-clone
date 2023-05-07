import {filterDefaults} from "./filtersVariables";
import {isFilterActive} from "./isFilterActive";

export const changeHandler = (
  filter: string[] | string,
  slug: string,
  replace: boolean = false
): string[] => {
  let result: string[];

  if (isFilterActive(filter, slug) || filterDefaults.includes(slug)) {
    result =
      typeof filter !== "string"
        ? filter.filter((item) => item !== slug)
        : (filter = []);
  } else {
    result = replace
      ? [slug]
      : typeof filter !== "string"
      ? [...filter, slug]
      : [filter, slug];
  }

  return result;
};
