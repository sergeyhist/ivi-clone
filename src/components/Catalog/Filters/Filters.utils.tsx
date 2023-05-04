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

export const genreFilterSlides: IFilterSlide[] = [
  { slug: "drama", text: "genres:drama", icon: <GiDramaMasks size={32} /> },
  {
    slug: "komediya",
    text: "genres:komediya",
    icon: <MdTheaterComedy size={32} />,
  },
  { slug: "boevik", text: "genres:boevik", icon: <GiBolterGun size={32} /> },
  {
    slug: "triller",
    text: "genres:triller",
    icon: <GiGhostAlly size={32} />,
  },
  {
    slug: "vestern",
    text: "genres:vestern",
    icon: <GiWinchesterRifle size={32} />,
  },
  {
    slug: "priklyucheniya",
    text: "genres:priklyucheniya",
    icon: <RiTreasureMapLine size={32} />,
  },
];

export const yearFilterItems: IFilter[] = [
  { slug: "all", text: "filters:years.all" },
  { slug: "2023", text: "filters:years.2023" },
  { slug: "2022", text: "filters:years.2022" },
  { slug: "2021", text: "filters:years.2021" },
  { slug: "2020", text: "filters:years.2020" },
  { slug: "2019", text: "filters:years.2019" },
  { slug: "2018", text: "filters:years.2018" },
  { slug: "2017", text: "filters:years.2017" },
  { slug: "2016", text: "filters:years.2016" },
  { slug: "2022-2023", text: "" },
  { slug: "2021-2022", text: "" },
  { slug: "2020-2021", text: "" },
  { slug: "2019-2020", text: "" },
  { slug: "2010-2020", text: "" },
  { slug: "2010-2015", text: "" },
  { slug: "2000-2010", text: "" },
  { slug: "1990-2000", text: "" },
  { slug: "1980-1990", text: "" },
  { slug: "0-1990", text: "filters:years.until" },
];
