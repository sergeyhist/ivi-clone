import { i18n } from "next-i18next";
import { ReactNode } from "react";
import {
  GiBolterGun,
  GiChargedArrow,
  GiDramaMasks,
  GiGhostAlly,
  GiWinchesterRifle,
} from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import { RiTreasureMapLine } from "react-icons/ri";
import { SwiperOptions } from "swiper";
import { IFilters } from "/src/types/IFilter";

export const sliderBreakpoints: { [width: number]: SwiperOptions } = {
  0: { slidesPerView: 1, slidesPerGroup: 1 },
  350: { slidesPerView: 2 },
  460: { slidesPerView: 3 },
  590: { slidesPerView: 4 },
  700: { slidesPerView: 5 },
  960: { slidesPerView: 4 },
  1160: { slidesPerView: 5, slidesPerGroup: 2, spaceBetween: 12 },
};

export const genreIcons: { [key: string]: ReactNode } = {
  drama: <GiDramaMasks size={32} />,
  komediya: <MdTheaterComedy size={32} />,
  boevik: <GiBolterGun size={32} />,
  triller: <GiGhostAlly size={32} />,
  vestern: <GiWinchesterRifle size={32} />,
  priklyucheniya: <RiTreasureMapLine size={32} />,
  anime: <GiChargedArrow size={32} />,
};

export const yearFilterItems: string[] = [
  "all",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2022-2023",
  "2021-2022",
  "2020-2021",
  "2019-2020",
  "2010-2020",
  "2010-2015",
  "2000-2010",
  "1990-2000",
  "1980-1990",
  "0-1990",
];

const defaultValues = ["all", "0", ""];

const isArrayNotEmpty = (filters: IFilters, key: string): boolean =>
  (filters[key] as string[]).length > 0;

const isFilterNotDefault = (filters: IFilters, key: string): boolean =>
  !defaultValues.includes(filters[key] as string);

const getTextSelector = (filters: IFilters, key: string): string => {
  if (filters[key] as string) {
    return i18n?.t(`${key}:${filters[key] as string}`) || "";
  }

  if (!(filters[key] as string) && ["rating", "assessments"].includes(key)) {
    return (
      i18n?.t(
        `filters:${key === "rating" ? "ratingFrom" : "ratingCountFrom"}`
      ) +
      " " +
      `${filters[key] as string}`
    );
  }

  return filters[key] as string;
};

const arrayToString = (filters: IFilters, key: string): string =>
  (filters[key] as string[])
    .map((filter) => i18n?.t(`${key}:${filter}`))
    .join(", ");

const updateTextArray = (filters: IFilters, key: string): string => {
  if (!Array.isArray(filters[key]) && isFilterNotDefault(filters, key)) {
    return getTextSelector(filters, key);
  }
  if (Array.isArray(filters[key]) && isArrayNotEmpty(filters, key)) {
    return arrayToString(filters, key);
  }
  return i18n?.t(`filters:all.${key}`) || "";
};

export const getFiltersText = (filters: IFilters) => {
  return Object.keys(filters)
    .map((key: string) => updateTextArray(filters, key))
    .join(", ");
};

export const isFilterActive = (filter: string | string[], slug: string) => {
  return typeof filter === "string" ? filter === slug : filter.includes(slug);
};
