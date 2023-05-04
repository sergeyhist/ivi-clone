import { FC, useEffect, useState } from "react";
import styles from "./Filmography.module.sass";
import { IMovie } from "/src/types/IMovie";
import movieApi from "/src/api/movieApi";
import Image from "next/image";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import BreadCrumbs from "/src/UI/BreadCrumbs/BreadCrumbs";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { declOfNum } from "/src/utils/declOfNum";

interface FilmographyProps {
  moviesId: string[];
}

const Filmography: FC<FilmographyProps> = ({ moviesId }) => {
  const [movies, setMovies] = useState<IMovie[] | undefined>([]);
  const { t } = useTranslation("person");
  const router = useRouter();

  useEffect(() => {
    movieApi.getMoviesById(moviesId).then((res) => setMovies(res));
  }, [moviesId]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {t("filmography")}
            <span>
              {movies &&
                `${movies.length} ${
                  router.locale === "ru"
                    ? declOfNum(movies.length, ["фильм", "фильма", "фильмов"])
                    : declOfNum(movies.length, ["movie", "movies", "movies"])
                }`}
            </span>
          </h2>
          <div className={styles.movies}>
            {movies?.map((movie, i) => {
              return (
                <div className={styles.movie__item} key={i}>
                  <div className={styles.img}>
                    <Image
                      width={80}
                      height={123}
                      src={"https://" + movie.img}
                      alt={movie.name_en}
                    />
                  </div>
                  <div className={styles.movie__poster}>
                    <div className={styles.info}>
                      <div className={styles.year}>{movie.year}</div>
                      <div className={styles.name}>
                        {router.locale === "ru" ? movie.name_ru : movie.name_en}
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
          {/*<BreadCrumbs type="slash" />*/}
        </div>
      </div>
    </section>
  );
};

export default Filmography;
