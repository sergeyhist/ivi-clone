import { NextRouter } from "next/router";
import { ISortingOption } from "/src/types/ISorting";

export const getSortOptions = (router: NextRouter): ISortingOption[] => {
  return [
    { slug: "assessments", text: "ratings-count" },
    { slug: "rating", text: "rating" },
    { slug: "year", text: "date" },
    { slug: `name_${router.locale || "ru"}`, text: "abc" },
  ];
};
