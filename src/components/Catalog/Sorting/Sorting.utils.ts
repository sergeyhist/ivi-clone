import { i18n } from "next-i18next";
import { NextRouter } from "next/router";
import { ISortingOption } from "/src/types/ISorting";

export const getSortOptions = (router: NextRouter): ISortingOption[] => {
  return [
    { slug: "assessments", text: i18n?.t("sorting:ratings-count") || "" },
    { slug: "rating", text: i18n?.t("sorting:rating") || "" },
    { slug: "year", text: i18n?.t("sorting:date") || "" },
    { slug: `name_${router.locale || "ru"}`, text: i18n?.t("sorting:abc") || "" },
  ];
};
