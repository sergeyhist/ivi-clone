import { FC } from "react";
import styles from "./TvDropDown.module.sass";
import { tvSlides, tvSportSlides } from "./TvDropDown.utils";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import TvLinks from "./TvLinks/TvLinks";
import TvSlider from "./TvSlider/TvSlider";
import SideWidget from "../SideWidget/SideWidget";
import { useTranslation } from "next-i18next";
import Link from "next/link";

const TvDropDown: FC = () => {
  const { t } = useTranslation("header");

  return (
    <>
      <div className={styles.tv__left_content}>
        <TvLinks />
        <Link href="https://www.ivi.ru/tvplus/tv-schedule-today" target="_blank">
          <CustomButton className={styles.tv__links_button}>
            {t("tv.program")}
          </CustomButton>
        </Link>
      </div>
      <div className={styles.channels__container} data-testid="channels-container">
        <div className={styles.channels__slider_row}>
          <h2 className={styles.channels__slider_title}>
            {t("tv.channels.0")}
          </h2>
          <TvSlider slides={tvSlides} />
        </div>
        <div className={styles.channels__slider_row}>
          <h2 className={styles.channels__slider_title}>
            {t("tv.channels.1")}
          </h2>
          <TvSlider slides={tvSportSlides} />
        </div>
      </div>
      <SideWidget />
    </>
  );
};

export default TvDropDown;
