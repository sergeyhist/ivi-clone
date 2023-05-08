import { FC } from "react";
import styles from "./MovieCardsRating.module.sass";
import { IMovie } from "/src/types/IMovie";

interface MovieCardsRatingProps {
  content: IMovie;
}

const MovieCardsRating: FC<MovieCardsRatingProps> = ({ content }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.grade}>
        <span className={`${styles.grade__number_int} ${styles.grade__number}`}>
          {String(content.rating)[0]}
        </span>
        <span className={styles.grade__number}>,</span>
        <span className={`${styles.grade__number_float} ${styles.grade__number}`}>
          {String(content.rating)[2] || 0}
        </span>
      </div>
    </div>
  );
};

export default MovieCardsRating;
