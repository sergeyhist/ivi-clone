import { FC } from "react";
import styles from "./MovieInfoMobile.module.sass";
import MovieTitle from "../MovieTitle/MovieTitle";
import MovieParams from "../MovieParams/MovieParams";
import MovieTrailer from "../MovieTrailer/MovieTrailer";
import MovieTrailerButtons from "../MovieButtons/MovieButtons";
import MovieMedallions from "../MovieMedallions/MovieMedallions";
import MovieDescription from "../MovieDescription/MovieDescription";
import MovieRating from "../MovieRating/MovieRating";
import MovieOption from "../MovieOption/MovieOption";
import MovieBadge from "../MovieBadge/MovieBadge";
import MovieOptions from "../MovieOptions/MovieOptions";
import TextDropDown from "/src/UI/TextDropDown/TextDropDown";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { IMovie } from "/src/types/IMovie";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { IPerson } from "/src/types/IPerson";

interface MovieInfoMobileProps {
  movie: IMovie;
  persons: IPerson[] | undefined;
}

const MovieInfoMobile: FC<MovieInfoMobileProps> = ({ movie, persons }) => {
  const { t } = useTranslation("movie");
  const { locale } = useRouter();

  return (
    <section className={styles.mobile}>
      <div className="container">
        <MovieTitle
          title={locale === "ru" ? movie.name_ru : movie.name_en}
          year={movie.year}
        />
        <MovieParams movie={movie} />
        <MovieTrailer movie={movie} />
        <div className={styles.mobile__row}>
          <div className={styles.mobile__content}>
            <MovieMedallions movie={movie} persons={persons} />
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
          </div>
          <div className={styles.mobile__buttons}>
            <MovieTrailerButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieInfoMobile;
