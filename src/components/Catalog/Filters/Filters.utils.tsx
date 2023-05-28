import { ReactNode } from "react";
import { BiGhost } from "react-icons/bi";
import { BsJournalRichtext } from "react-icons/bs";
import { FaRedhat } from "react-icons/fa";
import {
  GiBolterGun,
  GiChargedArrow,
  GiDramaMasks,
  GiGhostAlly,
  GiHatchets,
  GiLovers,
  GiMusicalNotes,
  GiWinchesterRifle,
} from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import { RiTreasureMapLine } from "react-icons/ri";
import { SwiperOptions } from "swiper";
import { TbRating18Plus } from "react-icons/tb";
import { MdSportsBasketball } from "react-icons/md";
import { IFilters } from "/src/types/IFilter";
import { SiWikidotjs } from "react-icons/si";
import { FaChild } from "react-icons/fa";

export const sliderBreakpoints: { [width: number]: SwiperOptions } = {
  0: { slidesPerView: 1, slidesPerGroup: 1 },
  350: { slidesPerView: 2 },
  460: { slidesPerView: 3 },
  590: { slidesPerView: 4 },
  700: { slidesPerView: 5 },
  960: { slidesPerView: 4, slidesPerGroup: 2, spaceBetween: 12 },
};

export const genreIcons: { [key: string]: ReactNode } = {
  drama: <GiDramaMasks size={32} />,
  comedy: <MdTheaterComedy size={32} />,
  action: <GiBolterGun size={32} />,
  thriller: <GiGhostAlly size={32} />,
  western: <GiWinchesterRifle size={32} />,
  adventure: <RiTreasureMapLine size={32} />,
  anime: <GiChargedArrow size={32} />,
  melodrama: <GiLovers size={32} />,
  sport: <MdSportsBasketball size={32} />,
  musical: <GiMusicalNotes size={32} />,
  biography: <BsJournalRichtext size={32} />,
  adults: <TbRating18Plus size={32} />,
  filmnoir: <FaRedhat size={32} />,
  criminal: <GiHatchets size={32} />,
  horror: <BiGhost size={32} />,
  animatedfilm: <SiWikidotjs size={32} />,
  children: <FaChild size={32} />,
};

export const yearFilterItems: string[] = [
  "0-0",
  "2023-2023",
  "2022-2022",
  "2021-2021",
  "2020-2020",
  "2019-2019",
  "2018-2018",
  "2017-2017",
  "2016-2016",
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

export const sortHandler = (arr: string[]): string[] =>
  [...arr].sort((a, b) => (a > b ? 1 : -1));

export const getResetfilters = (
  filters: IFilters
): { [key: string]: string | string[] } => {
  return Object.keys(filters).reduce((result, key) => {
    return filters[key].length > 0 ? { ...result, [key]: [] } : result;
  }, {});
};
