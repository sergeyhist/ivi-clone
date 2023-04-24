import { FC } from "react";
import styles from "../CinemaDetails.module.sass";

const CinemaDetailsTitle: FC = () => {
  return (
    <h2 className={styles.section__title}>
      Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее
      удовольствие
    </h2>
  );
};

export default CinemaDetailsTitle;
