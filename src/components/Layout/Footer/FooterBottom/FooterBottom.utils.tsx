import ILink from "/src/types/ILink";
import {
  FaGooglePlay,
  FaLinkedinIn,
  FaOdnoklassniki,
  FaTelegramPlane,
  FaTwitter,
  FaVk,
} from "react-icons/fa";
import { IoTvSharp } from "react-icons/io5";
import { MdDevices, MdPhoneInTalk } from "react-icons/md";
import ButtonContent from "./ButtonContent/ButtonContent";
import { BsApple } from "react-icons/bs";

export const bottomRightLinks: ILink[] = [
  {
    url: "https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e",
    content: <FaVk />,
    target: "_blank",
  },
  {
    url: "https://ok.ru/ivi.ru",
    content: <FaOdnoklassniki />,
    target: "_blank",
  },
  {
    url: "https://twitter.com/ivi_ru",
    content: <FaTwitter />,
    target: "_blank",
  },
  { url: "https://vb.me/a0544c", content: <MdPhoneInTalk />, target: "_blank" },
  {
    url: "https://www.linkedin.com/company/2543415/",
    content: <FaLinkedinIn />,
    target: "_blank",
  },
  {
    url: "https://t.me/official_iviru",
    content: <FaTelegramPlane style={{ paddingRight: "3px" }} />,
    target: "_blank",
  },
];

export const bottomLeftLinks: ILink[] = [
  {
    url: "https://go.onelink.me/app/devicesiOS",
    content: (
      <ButtonContent
        icon={<BsApple size={20} />}
        topText="appstore"
        bottomText="App Store"
      />
    ),
    target: "_blank",
  },
  {
    url: "https://go.onelink.me/app/devicesAndroid",
    content: (
      <ButtonContent
        icon={<FaGooglePlay size={18} />}
        topText="google"
        bottomText="Google Play"
      />
    ),
    target: "_blank",
  },
  {
    url: "https://www.ivi.ru/pages/tvsmart",
    content: (
      <ButtonContent
        icon={<IoTvSharp size={20} />}
        topText="smarttv"
        bottomText="Smart TV"
      />
    ),
    target: "_blank",
  },
  {
    url: "https://www.ivi.ru/devices",
    content: (
      <ButtonContent icon={<MdDevices size={20} />} bottomText={"devices"} />
    ),
    target: "_blank",
  },
];
