import { FC } from "react";
import styles from "./MovieRating.module.sass";
import { useTranslation } from "react-i18next";

interface RatingProps {
  grade: string;
  category: string;
  grades: string;
}

const MovieRating: FC<RatingProps> = ({ grade, category, grades }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.rating}>
      <button className={styles.rating__button}>
        <p className={styles.rating__grade}>{grade}</p>
        <div className={styles.rating__column}>
          <p className={styles.rating__title}>{t("movie.rating.title")}</p>
          <p className={styles.rating__category}>{category}</p>
          <p className={styles.rating__grades}>
            {grades} {t("movie.rating.grades")}
          </p>
        </div>
        <p className={styles.rating__badge}>{t("movie.rating.estimate")}</p>
      </button>
    </div>
  );
};

export default MovieRating;
