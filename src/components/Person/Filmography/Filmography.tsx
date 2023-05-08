import { FC, useEffect, useState } from "react";
import styles from "./Filmography.module.sass";
import { IMovie } from "/src/types/IMovie";
import { getMoviesById } from "/src/api/movieApi";
import Image from "next/image";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import BreadCrumbs from "/src/UI/BreadCrumbs/BreadCrumbs";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {getMovieDeclination} from "/src/utils/getMovieDeclination";

interface FilmographyProps {
  firstName?: string;
  lastName?: string;
  moviesId: string[];
}

const Filmography: FC<FilmographyProps> = ({
  moviesId,
  firstName,
  lastName,
}) => {
  const [movies, setMovies] = useState<IMovie[] | undefined>([]);
  const [moviesToShow, setMoviesToShow] = useState<IMovie[] | undefined>();
  const { t } = useTranslation("person");
  const { locale } = useRouter();

  useEffect(() => {
    getMoviesById(moviesId).then((res) => setMovies(res));
  }, [moviesId]);

  useEffect(() => {
    setMoviesToShow(movies?.slice(0, 8));
  }, [movies]);

  const handleShowMovies = (): void => {
    setMoviesToShow(movies);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {t("filmography")}
            <span>
              {movies &&
                `${movies.length} ${getMovieDeclination(
                  movies.length,
                  locale
                )}`}
            </span>
          </h2>
          <div className={styles.movies}>
            {moviesToShow?.map((movie, i) => {
              return (
                <div className={styles.movie__item} key={i}>
                  <div className={styles.img}>
                    <Image
                      fill
                      sizes="100%"
                      src={
                        movie.img
                          ? "https:" + movie.img
                          : "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/eac905d6-a5b8-4ce4-aff2-0c565a923fa7/360"
                      }
                      alt={movie.name_en}
                    />
                  </div>
                  <div className={styles.movie__poster}>
                    <div className={styles.info}>
                      <div className={styles.year}>{movie.year}</div>
                      <div className={styles.name}>
                        {locale === "ru" ? movie.name_ru : movie.name_en}
                      </div>
                      <div className={styles.rating}>
                        {`${t("rating")} ${movie.rating}`}
                      </div>
                    </div>
                    <CustomButton className={styles.btn}>
                      {t("movieButton")}
                    </CustomButton>
                  </div>
                </div>
              );
            })}
          </div>
          {movies && moviesToShow && moviesToShow.length <= 8 && (
            <div className={styles.show__btn} onClick={handleShowMovies}>
              {`${t("showButton")} ${movies.length - 8} ${getMovieDeclination(
                movies.length,
                locale
              )} `}
            </div>
          )}
          <BreadCrumbs type="slash" currentTitle={(firstName && lastName) && `${firstName} ${lastName}`}/>
        </div>
      </div>
    </section>
  );
};

export default Filmography;
