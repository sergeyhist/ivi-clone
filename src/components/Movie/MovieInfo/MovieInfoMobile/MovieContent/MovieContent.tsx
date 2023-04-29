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
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "react-i18next";

interface MovieContentProps {
  movie: IMovie;
}

const MovieContent: FC<MovieContentProps> = ({ movie }) => {
  const { t } = useTranslation();

  return (
    <>
      <MovieMedallions movie={movie} />
      <CustomButton type="dark" className={styles.button}>
        <i className={`${styles.button__icon} ${styles.button__icon_film}`}></i>
        <p className={styles.button__text}>{t("movie.trailer.free")}</p>
      </CustomButton>
      <TextDropDown
        toogleTitles={{
          defaultTitle: t("movie.details.show"),
          activeTitle: t("movie.details.hide"),
        }}
      >
        <MovieDescription descriptionHTML={movie.description} />
      </TextDropDown>
      <MovieRating
        grade={movie.rating.grade}
        category={movie.rating.gradeCategory}
        grades={movie.rating.grades}
      />
      <MovieOptions>
        <MovieOption className={styles.option} title={t("movie.details.langs")}>
          {movie.langs.map((lang, index) => (
            <span key={index}>{lang.name}</span>
          ))}
        </MovieOption>
        <MovieOption
          className={styles.option}
          title={t("movie.details.subtitles")}
        >
          {movie.subtitles.map((lang, index) => (
            <span key={index}>{lang.name}</span>
          ))}
        </MovieOption>
        <MovieOption
          className={styles.option}
          title={t("movie.details.quality")}
        >
          {movie.qualities.map((quality, index) => (
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
