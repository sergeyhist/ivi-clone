import { FC } from "react";
import styles from "./MovieRating.module.sass";
import { useTranslation } from "next-i18next";
import { getFormateNumber } from "../../../../../utils/movie/movie";

interface RatingProps {
  grade: number;
  grades: number;
}

const MovieRating: FC<RatingProps> = ({ grade, grades }) => {
  const { t } = useTranslation("movie");

  return (
    <div className={styles.rating}>
      <button className={styles.rating__button}>
        <p className={styles.rating__grade}>{grade}</p>
        <div className={styles.rating__column}>
          <p className={styles.rating__title}>{t("rating.title")}</p>
          <p className={styles.rating__grades}>
            {getFormateNumber(grades)} {t("rating.grades")}
          </p>
        </div>
        <p className={styles.rating__badge}>{t("rating.estimate")}</p>
      </button>
    </div>
  );
};

export default MovieRating;
