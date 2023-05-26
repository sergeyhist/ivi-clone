import { FC, useEffect, useState } from "react";
import styles from "./Filmography.module.sass";
import { IMovie } from "/src/types/IMovie";
import Image from "next/image";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getMovieDeclination } from "/src/utils/getMovieDeclination";
import { getBackendImage } from "/src/utils/getBackendImg";

interface FilmographyProps {
  movies: IMovie[];
}

const Filmography: FC<FilmographyProps> = ({ movies }) => {
  const [moviesToShow, setMoviesToShow] = useState<IMovie[]>([]);
  const { t } = useTranslation("person");
  const { locale, push } = useRouter();

  useEffect(() => {
    setMoviesToShow(movies.slice(0, 8));
  }, [movies]);

  const handleShowMovies = (): void => {
    setMoviesToShow(movies);
  };

  const movieClick = (id: string): void => {
    push(`/movies/${id}`);
  };

  return (
    <div className={styles.content} data-testid="filmography-container">
      <h2 className={styles.title}>
        {t("filmography")}
        <span>{movies && `${getMovieDeclination(movies.length, locale)}`}</span>
      </h2>
      <div className={styles.movies}>
        {moviesToShow.map((movie, i) => {
          return (
            <div className={styles.movie__item} key={i}>
              <div className={styles.img}>
                <Image
                  fill
                  sizes="100%"
                  src={getBackendImage(movie.img)}
                  alt={movie.name_en}
                  placeholder="blur"
                  blurDataURL="/images/placeholder.svg"
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
                <CustomButton
                  className={styles.btn}
                  clickCallback={() => movieClick(movie.film_id)}
                >
                  {t("movieButton")}
                </CustomButton>
              </div>
            </div>
          );
        })}
      </div>
      {movies && moviesToShow && moviesToShow.length <= 8 && (
        <div className={styles.show__btn} onClick={handleShowMovies} data-testid="show-movies">
          {`${t("showButton")} ${getMovieDeclination(movies.length - 8, locale)} `}
        </div>
      )}
    </div>
  );
};

export default Filmography;
