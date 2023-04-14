import { FC, ReactNode } from "react";
import styles from "./FooterBottom.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { BsApple } from "react-icons/bs";
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

const rightLinks: Array<{ url: string; icon: ReactNode }> = [
  {
    url: "https://vk.com/iviru?crc=fa4448c13e06e69ba9e814e8743c7e2e",
    icon: <FaVk />,
  },
  { url: "https://ok.ru/ivi.ru", icon: <FaOdnoklassniki /> },
  { url: "https://twitter.com/ivi_ru", icon: <FaTwitter /> },
  { url: "https://vb.me/a0544c", icon: <MdPhoneInTalk /> },
  {
    url: "https://www.linkedin.com/company/2543415/",
    icon: <FaLinkedinIn />,
  },
  {
    url: "https://t.me/official_iviru",
    icon: <FaTelegramPlane style={{ paddingRight: "3px" }} />,
  },
];

const FooterBottom: FC = () => {
  return (
    <div className={styles.bottom}>
      <div className={styles.bottom__left}>
        <CustomButton
          clickCallback={() => {
            window.open("https://go.onelink.me/app/devicesiOS", "_blank");
          }}
        >
          {
            <ButtonContent
              icon={<BsApple size={20} />}
              topText="Загрузить в"
              bottomText="App Store"
            />
          }
        </CustomButton>
        <CustomButton
          clickCallback={() => {
            window.open("https://go.onelink.me/app/devicesAndroid", "_blank");
          }}
        >
          {
            <ButtonContent
              icon={<FaGooglePlay size={18} />}
              topText="Доступно в"
              bottomText="Google Play"
            />
          }
        </CustomButton>
        <CustomButton
          clickCallback={() => {
            window.open("https://www.ivi.ru/pages/tvsmart", "_blank");
          }}
        >
          {
            <ButtonContent
              icon={<IoTvSharp size={20} />}
              topText="Смотрите на"
              bottomText="Smart TV"
            />
          }
        </CustomButton>
        <CustomButton
          clickCallback={() => {
            window.open("https://www.ivi.ru/devices", "_blank");
          }}
        >
          {
            <ButtonContent
              icon={<MdDevices size={20} />}
              bottomText="Все устройства"
            />
          }
        </CustomButton>
      </div>
      <div className={styles.bottom__right}>
        {rightLinks.map((link, i) => (
          <CustomButton
            key={i}
            borderRadius="50%"
            width="40px"
            padding="0"
            clickCallback={() => {
              window.open(link.url, "_blank");
            }}
          >
            {link.icon}
          </CustomButton>
        ))}
      </div>
    </div>
  );
};

export default FooterBottom;
