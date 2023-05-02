import { FC } from "react";
import styles from "./MovieMedallions.module.sass";
import Image from "next/image";
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "next-i18next";

interface MovieMedallionsProps {
  movie: IMovie;
}

const MovieMedallions: FC<MovieMedallionsProps> = ({ movie }) => {
  const { t } = useTranslation("movie");

  return (
    <ul className={styles.medallions}>
      <li className={styles.medallion}>
        <div className={styles.medallion__wrapper}>
          <p className={styles.medallion__grade}>{movie.rating.grade}</p>
        </div>
        <p className={styles.medallion__text}>
          {t("medallions.rating")}
          <br />
          {t("medallions.ivi")}
        </p>
      </li>
      {movie.creators.map((creator, index) => (
        <li key={index} className={styles.medallion}>
          <div className={styles.medallion__wrapper}>
            <Image
              className={styles.medallion__avatar}
              height={44}
              width={44}
              src={creator.imageUrl || ""}
              alt="avatar"
            />
          </div>
          <p className={styles.medallion__text}>
            {creator.firstName} {creator.lastName}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MovieMedallions;
