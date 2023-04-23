import { FC } from "react";
import styles from "./MovieDropDown.module.sass";
import MovieDescription from "../../MovieDescription/MovieDescription";
import MovieOption from "../../MovieOption/MovieOption";
import MovieBadge from "../../MovieBadge/MovieBadge";
import MovieOptions from "../../MovieOptions/MovieOptions";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import { IMovie } from "../../MovieInfo.utils";

interface MovieDropDownProps {
  movie: IMovie;
}

const MovieDropDown: FC<MovieDropDownProps> = ({ movie }) => {
  return (
    <TextDropDown>
      <MovieDescription descriptionHTML={movie.description} />
      <MovieOptions>
        <MovieOption className={styles.option} title="Языки">
          {movie.movieParams.movieLangs.map((lang, index) => (
            <span className={styles.option__span} key={index}>
              {lang.name}
            </span>
          ))}
        </MovieOption>
        <MovieOption className={styles.option} title="Субтитры">
          {movie.movieParams.movieSubtitles.map((lang, index) => (
            <span className={styles.option__span} key={index}>
              {lang.name}
            </span>
          ))}
        </MovieOption>
        <MovieOption className={styles.option} title="Качество">
          {movie.movieParams.movieQualities.map((movieQuality, index) => (
            <MovieBadge className={styles.option__span} key={index}>
              {movieQuality}
            </MovieBadge>
          ))}
        </MovieOption>
      </MovieOptions>
    </TextDropDown>
  );
};

export default MovieDropDown;
