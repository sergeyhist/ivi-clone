import { FC } from "react";
import styles from "./TrailerButtons.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";

const TrailerButtons: FC = () => {
  return (
    <div className={styles.buttons}>
      <CustomButton type="dark" className={styles.button}>
        <div className={styles.button__content}>
          <i className={`${styles.button__icon} ${styles.button__icon_play}`}></i>
          <p className={styles.button__text}>Трейлер</p>
        </div>
      </CustomButton>
      <CustomButton type="dark" className={styles.button}>
        <div className={styles.button__content}>
          <i className={`${styles.button__icon} ${styles.button__icon_save}`}></i>
        </div>
      </CustomButton>
      <CustomButton type="dark" className={styles.button}>
        <div className={styles.button__content}>
          <i className={`${styles.button__icon} ${styles.button__icon_download}`}></i>
        </div>
      </CustomButton>
      <CustomButton type="dark" className={`${styles.button} ${styles.button_desctop}`}>
        <div className={styles.button__content}>
          <i className={`${styles.button__icon} ${styles.button__icon_film}`}></i>
          <p className={styles.button__text}>Бесплатные фильмы</p>
        </div>
      </CustomButton>
    </div>
  );
};

export default TrailerButtons;
