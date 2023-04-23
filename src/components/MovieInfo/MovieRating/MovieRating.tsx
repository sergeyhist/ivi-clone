import { FC } from "react";
import styles from "./MovieRating.module.sass";

interface RatingProps {
  grade: string;
  category: string;
  grades: string;
}

const MovieRating: FC<RatingProps> = ({ grade, category, grades }) => {
  return (
    <div className={styles.rating}>
      <button className={styles.rating__button}>
        <p className={styles.rating__grade}>{grade}</p>
        <div className={styles.rating__column}>
          <p className={styles.rating__title}>Рейтинг Иви</p>
          <p className={styles.rating__category}>{category}</p>
          <p className={styles.rating__grades}>{grades} оценок</p>
        </div>
        <p className={styles.rating__badge}>Оценить</p>
      </button>
    </div>
  );
};

export default MovieRating;
