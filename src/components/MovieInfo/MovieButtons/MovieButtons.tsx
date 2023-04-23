import { FC } from "react";
import styles from "./MovieButtons.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";

const MovieButtons: FC = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.buttons__content}>
        <CustomButton type="dark" className={styles.button}>
          <i
            className={`${styles.button__icon} ${styles.button__icon_play}`}
          ></i>
          <p className={styles.button__text}>Трейлер</p>
        </CustomButton>
        <CustomButton type="dark" className={styles.button}>
          <i
            className={`${styles.button__icon} ${styles.button__icon_save}`}
          ></i>
        </CustomButton>
        <CustomButton type="dark" className={styles.button}>
          <i
            className={`${styles.button__icon} ${styles.button__icon_download}`}
          ></i>
        </CustomButton>
        <CustomButton
          type="dark"
          className={`${styles.button} ${styles.button_desctop}`}
        >
          <i
            className={`${styles.button__icon} ${styles.button__icon_film}`}
          ></i>
          <p className={styles.button__text}>Бесплатные фильмы</p>
        </CustomButton>
      </div>
    </div>
  );
};

export default MovieButtons;
