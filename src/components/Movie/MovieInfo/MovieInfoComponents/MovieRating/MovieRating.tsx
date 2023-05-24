import { FC } from "react";
import styles from "./MovieRating.module.sass";
import { useTranslation } from "next-i18next";
import { getFormateNumber } from "../../../../../utils/movie";

interface RatingProps {
  grade: number;
  grades: number;
}

const MovieRating: FC<RatingProps> = ({ grade, grades }) => {
  const { t } = useTranslation("movie");
  const gradeClassName = grade > 6 ? styles.rating__grade_fine : "";
  const rating = String(grade);

  return (
    <div data-testid="movie-rating" className={styles.rating}>
      <button className={styles.rating__button}>
        <p
          data-testid="movie-rating-grade"
          className={`${styles.rating__grade} ${gradeClassName}`}
        >
          {rating[0]},{rating[2] || "0"}
        </p>
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
