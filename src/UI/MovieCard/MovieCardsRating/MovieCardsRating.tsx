import { FC } from "react";
import styles from "./MovieCardsRating.module.sass";
import IMovieCard from "../../../types/IMovieCard";
import ProgressBar from "../../ProgressBar/ProgressBar";

interface MovieCardsRatingProps {
  slide: IMovieCard;
}

const MovieCardsRating: FC<MovieCardsRatingProps> = ({ slide }) => {
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
        {slide.ratingBars.map((value, index) => (
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
