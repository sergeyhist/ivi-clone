import {
  GiBolterGun,
  GiDramaMasks,
  GiGhostAlly,
  GiWinchesterRifle,
} from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import { RiTreasureMapLine } from "react-icons/ri";
import { SwiperOptions } from "swiper";
import { IFilter, IFilterSlide } from "/src/types/IFilter";

export const sliderBreakpoints: { [width: number]: SwiperOptions } = {
  0: { slidesPerView: 1, slidesPerGroup: 1 },
  350: { slidesPerView: 2 },
  460: { slidesPerView: 3 },
  590: { slidesPerView: 4 },
  700: { slidesPerView: 5 },
  960: { slidesPerView: 4 },
  1160: { slidesPerView: 5, slidesPerGroup: 2, spaceBetween: 12 },
};

export const genreFilterItems: IFilter[] = [
  { slug: "arthouse", text: "genres.arthouse" },
  { slug: "western", text: "genres.western" },
  { slug: "children", text: "genres.children" },
  { slug: "foreign", text: "genres.foreign" },
  { slug: "mystic", text: "genres.mystic" },
  { slug: "ussr", text: "genres.ussr" },
  { slug: "horror", text: "genres.horror" },
  { slug: "biography", text: "genres.biography" },
  { slug: "military", text: "genres.military" },
  { slug: "drama", text: "genres.drama" },
  { slug: "comedy", text: "genres.comedy" },
  { slug: "action", text: "genres.action" },
  { slug: "thriller", text: "genres.thriller" },
  { slug: "adventure", text: "genres.adventure" },
];

export const genreFilterSlides: IFilterSlide[] = [
  { slug: "drama", text: "genres.drama", icon: <GiDramaMasks size={32} /> },
  {
    slug: "comedy",
    text: "genres.comedy",
    icon: <MdTheaterComedy size={32} />,
  },
  { slug: "action", text: "genres.action", icon: <GiBolterGun size={32} /> },
  {
    slug: "thriller",
    text: "genres.thriller",
    icon: <GiGhostAlly size={32} />,
  },
  {
    slug: "western",
    text: "genres.western",
    icon: <GiWinchesterRifle size={32} />,
  },
  {
    slug: "adventure",
    text: "genres.adventure",
    icon: <RiTreasureMapLine size={32} />,
  },
];

export const countryFilterItems: IFilter[] = [
  { slug: "aus", text: "countries.aus" },
  { slug: "arg", text: "countries.arg" },
  { slug: "arm", text: "countries.arm" },
  { slug: "bel", text: "countries.bel" },
  { slug: "belg", text: "countries.belg" },
  { slug: "bra", text: "countries.bra" },
  { slug: "greatbr", text: "countries.greatbr" },
  { slug: "hung", text: "countries.hung" },
  { slug: "ger", text: "countries.ger" },
  { slug: "hong", text: "countries.hong" },
  { slug: "denm", text: "countries.denm" },
  { slug: "india", text: "countries.india" },
  { slug: "irel", text: "countries.irel" },
  { slug: "spa", text: "countries.spa" },
  { slug: "ita", text: "countries.ita" },
  { slug: "kaz", text: "countries.kaz" },
  { slug: "can", text: "countries.can" },
  { slug: "china", text: "countries.china" },
  { slug: "col", text: "countries.col" },
  { slug: "mex", text: "countries.mex" },
  { slug: "neth", text: "countries.neth" },
  { slug: "newzel", text: "countries.newzel" },
  { slug: "norw", text: "countries.norw" },
  { slug: "pol", text: "countries.pol" },
  { slug: "rus", text: "countries.rus" },
  { slug: "ussr", text: "countries.ussr" },
  { slug: "usa", text: "countries.usa" },
  { slug: "thai", text: "countries.thai" },
  { slug: "turk", text: "countries.turk" },
  { slug: "fin", text: "countries.fin" },
  { slug: "fra", text: "countries.fra" },
  { slug: "switz", text: "countries.switz" },
  { slug: "swed", text: "countries.swed" },
  { slug: "southaf", text: "countries.southaf" },
  { slug: "southkr", text: "countries.southkr" },
  { slug: "jap", text: "countries.jap" },
];

export const yearFilterItems: IFilter[] = [
  { slug: "all", text: "filters.years.all" },
  { slug: "2023", text: "filters.years.2023" },
  { slug: "2022", text: "filters.years.2022" },
  { slug: "2021", text: "filters.years.2021" },
  { slug: "2020", text: "filters.years.2020" },
  { slug: "2019", text: "filters.years.2019" },
  { slug: "2018", text: "filters.years.2018" },
  { slug: "2017", text: "filters.years.2017" },
  { slug: "2016", text: "filters.years.2016" },
  { slug: "2022-2023", text: "" },
  { slug: "2021-2022", text: "" },
  { slug: "2020-2021", text: "" },
  { slug: "2019-2020", text: "" },
  { slug: "2010-2020", text: "" },
  { slug: "2010-2015", text: "" },
  { slug: "2000-2010", text: "" },
  { slug: "1990-2000", text: "" },
  { slug: "1980-1990", text: "" },
  { slug: "0-1990", text: "filters.years.until" },
];