import { GiBolterGun, GiDramaMasks, GiGhostAlly, GiWinchesterRifle } from "react-icons/gi";
import { MdTheaterComedy } from "react-icons/md";
import { RiTreasureMapLine } from "react-icons/ri";
import { IFilter, IFilterSlide } from "/src/types/IFilter";

export const genreFilterItems: IFilter[] = [
  { slug: "arthouse", text: "Артхаус" },
  { slug: "western", text: "Вестерн" },
  { slug: "children", text: "Для детей" },
  { slug: "foreign", text: "Зарубежные" },
  { slug: "comedy", text: "Комедии" },
  { slug: "mystic", text: "Мистические" },
  { slug: "adventure", text: "Приключения" },
  { slug: "ussr", text: "Советские" },
  { slug: "horror", text: "Ужасы" },
  { slug: "biography", text: "Биография" },
  { slug: "action", text: "Боевики" },
  { slug: "military", text: "Военные" },
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
