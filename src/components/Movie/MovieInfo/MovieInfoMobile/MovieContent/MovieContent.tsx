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
import { useTranslation } from "next-i18next";

interface MovieContentProps {
  movie: IMovie;
}

const MovieContent: FC<MovieContentProps> = ({ movie }) => {
  const { t } = useTranslation("movie");

  return (
    <>
      <MovieMedallions movie={movie} />
      <CustomButton type="dark" className={styles.button}>
        <i className={`${styles.button__icon} ${styles.button__icon_film}`}></i>
        <p className={styles.button__text}>{t("trailer.free")}</p>
      </CustomButton>
      <TextDropDown
        toggleTitles={{
          defaultTitle: t("details.show"),
          activeTitle: t("details.hide"),
        }}
      >
        <MovieDescription descriptionHTML={movie.description} />
      </TextDropDown>
      <MovieRating grade={movie.rating} grades={movie.assessments} />
      <MovieOptions>
        <MovieOption className={styles.option} title={t("details.langs")}>
          {movie.languagesAudio.map((lang) => (
            <span key={lang.language_id}>{lang.language}</span>
          ))}
        </MovieOption>
        <MovieOption className={styles.option} title={t("details.subtitles")}>
          {movie.languagesSubtitle.map((lang) => (
            <span key={lang.language_id}>{lang.language}</span>
          ))}
        </MovieOption>
        <MovieOption className={styles.option} title={t("details.quality")}>
          {movie.qualities.map((quality) => (
            <MovieBadge key={quality.quality_id} className={styles.badge}>
              {quality.quality}
            </MovieBadge>
          ))}
        </MovieOption>
      </MovieOptions>
    </>
  );
};

export default MovieContent;
