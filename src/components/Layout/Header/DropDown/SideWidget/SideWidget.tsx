import { FC } from "react";
import styles from "./SideWidget.module.sass";
import HeaderWidget from "../../HeaderWidget/HeaderWidget";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { IoTvSharp } from "react-icons/io5";
import { useTranslation } from "next-i18next";

const SideWidget: FC = () => {
  const { t } = useTranslation("header");

  return (
    <div className={styles.widget} data-testid="side-widget">
      <HeaderWidget />
      <a href="https://www.ivi.ru/pages/tvsmart/" target="_blank">
        <CustomButton className={styles.button}>
          <IoTvSharp />
          <div>{t("headerWidget.smartTvButton")}</div>
        </CustomButton>
      </a>
    </div>
  );
};

export default SideWidget;
