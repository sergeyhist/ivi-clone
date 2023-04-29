import {MdHistory, MdOutlineArchive} from "react-icons/md";
import {BsBookmark} from "react-icons/bs";
import {SlDiamond} from "react-icons/sl";
import {GiAchievement} from "react-icons/gi";
import {BiBarcode} from "react-icons/bi";
import {AiOutlineCreditCard} from "react-icons/ai";

export const profileLinks = [
  "https://www.ivi.ru/profile/purchases",
  "https://www.ivi.ru/profile/favorites",
  "https://www.ivi.ru/profile/watched",
  "https://www.ivi.ru/profile/subscriptions",
  "https://www.ivi.ru/profile/subscriptions",
  "https://www.ivi.ru/profile/cards",
  "https://www.ivi.ru/profile/cards",
];

export const cardsIcons = [
  <MdOutlineArchive key='archive'/>,
  <BsBookmark key='bookmark'/>,
  <MdHistory key='history'/>,
  <SlDiamond key='diamond'/>,
  <GiAchievement key='achievement'/>,
  <BiBarcode key='barcode'/>,
  <AiOutlineCreditCard key='card'/>
];