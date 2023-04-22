import { FC } from "react";
import styles from "./TrailerButtons.module.sass";
import FilmButton from "../FilmButton/FilmButton";

const TrailerButtons: FC = () => {
  return (
    <div className={styles.buttons}>
      <div className={styles.buttons__content}>
        <FilmButton className={styles.button}>
          <i
            className={`${styles.button__icon} ${styles.button__icon_play}`}
          ></i>
          <p className={styles.button__text}>Трейлер</p>
        </FilmButton>
        <FilmButton className={styles.button}>
          <i
            className={`${styles.button__icon} ${styles.button__icon_save}`}
          ></i>
        </FilmButton>
        <FilmButton className={styles.button}>
          <i
            className={`${styles.button__icon} ${styles.button__icon_download}`}
          ></i>
        </FilmButton>
        <FilmButton className={`${styles.button} ${styles.button_desctop}`}>
          <i
            className={`${styles.button__icon} ${styles.button__icon_film}`}
          ></i>
          <p className={styles.button__text}>Бесплатные фильмы</p>
        </FilmButton>
      </div>
    </div>
  );
};

export default TrailerButtons;
