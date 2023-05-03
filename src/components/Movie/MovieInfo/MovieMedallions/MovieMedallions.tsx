import { FC } from "react";
import styles from "./MovieMedallions.module.sass";
import Image from "next/image";
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "next-i18next";
import { creators } from "/src/utils/creators";
import { useRouter } from "next/router";

interface MovieMedallionsProps {
  movie: IMovie;
}

const MovieMedallions: FC<MovieMedallionsProps> = ({ movie }) => {
  const { t } = useTranslation("movie");
  const { locale } = useRouter();

  return (
    <ul className={styles.medallions}>
      <li className={styles.medallion}>
        <div className={styles.medallion__wrapper}>
          <p className={styles.medallion__grade}>{movie.rating}</p>
        </div>
        <p className={styles.medallion__text}>
          {t("medallions.rating")}
          <br />
          {t("medallions.ivi")}
        </p>
      </li>
      {creators.map((creator, index) => (
        <li key={index} className={styles.medallion}>
          <div className={styles.medallion__wrapper}>
            <Image
              className={styles.medallion__avatar}
              height={44}
              width={44}
              src={"https:" + creator.img}
              alt={creator.first_name_en}
            />
          </div>
          <p className={styles.medallion__text}>
            {creator[`first_name_${String(locale)}`] || creator.first_name_en}{" "}
            {creator[`last_name_${String(locale)}`] || creator.last_name_en}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default MovieMedallions;
