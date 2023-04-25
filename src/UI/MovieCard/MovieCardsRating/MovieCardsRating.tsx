import { FC } from "react";
import styles from "./MovieCardsRating.module.sass";
import IMovieCard from "../../../types/IMovieCard";
import ProgressBar from "../../ProgressBar/ProgressBar";

interface MovieCardsRatingProps {
  content: IMovieCard;
}

const MovieCardsRating: FC<MovieCardsRatingProps> = ({ content }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.grade}>
        <span className={`${styles.grade__number_int} ${styles.grade__number}`}>
          8
        </span>
        <span className={styles.grade__number}>,</span>
        <span
          className={`${styles.grade__number_float} ${styles.grade__number}`}
        >
          6
        </span>
      </div>
      <div className={styles.rating__bars}>
        {content.ratingBars.map((value, index) => (
          <ProgressBar
            key={index}
            className={styles.rating__bar}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCardsRating;
