import { FC } from "react";
import styles from "./MovieContent.module.sass";
import MovieMedallions from "../../MovieMedallions/MovieMedallions";
import MovieDescription from "../../MovieDescription/MovieDescription";
import MovieRating from "../../MovieRating/MovieRating";
import MovieOption from "../../MovieOption/MovieOption";
import MovieBadge from "../../MovieBadge/MovieBadge";
import MovieOptions from "../../MovieOptions/MovieOptions";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { IMovie } from "../../MovieInfo.utils";

interface MovieContentProps {
  movie: IMovie;
}

const MovieContent: FC<MovieContentProps> = ({ movie }) => {
  return (
    <>
      <MovieMedallions creators={movie.movieCreators} />

      <CustomButton type="dark" className={styles.button}>
        <i className={`${styles.button__icon} ${styles.button__icon_film}`}></i>
        <p className={styles.button__text}>Бесплатные фильмы</p>
      </CustomButton>

      <TextDropDown>
        <MovieDescription descriptionHTML={movie.description} />
      </TextDropDown>

      <MovieRating grade="8.9" category="Интересный сюжет" grades="143 908" />

      <MovieOptions>
        <MovieOption className={styles.option} title="Языки">
          {movie.movieParams.movieLangs.map((lang, index) => (
            <span key={index}>{lang.name}</span>
          ))}
        </MovieOption>
        <MovieOption className={styles.option} title="Субтитры">
          {movie.movieParams.movieSubtitles.map((lang, index) => (
            <span key={index}>{lang.name}</span>
          ))}
        </MovieOption>
        <MovieOption className={styles.option} title="Качество">
          {movie.movieParams.movieQualities.map((quality, index) => (
            <MovieBadge key={index} className={styles.badge}>
              {quality}
            </MovieBadge>
          ))}
        </MovieOption>
      </MovieOptions>
    </>
  );
};

export default MovieContent;
