import { FC } from "react";
import styles from "./MovieButtons.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { useTranslation } from "next-i18next";

const MovieButtons: FC = () => {
  const { t } = useTranslation("movie");

  return (
    <div className={styles.buttons}>
      <div className={styles.buttons__content}>
        <CustomButton type="dark" className={styles.button}>
          <i className={`${styles.button__icon} ${styles.button__icon_play}`}></i>
          <p className={styles.button__text}>{t("trailer.name")}</p>
        </CustomButton>
        <CustomButton type="dark" className={styles.button}>
          <i className={`${styles.button__icon} ${styles.button__icon_save}`}></i>
        </CustomButton>
        <CustomButton type="dark" className={styles.button}>
          <i
            className={`${styles.button__icon} ${styles.button__icon_download}`}
          ></i>
        </CustomButton>
      </div>
    </div>
  );
};

export default MovieButtons;
