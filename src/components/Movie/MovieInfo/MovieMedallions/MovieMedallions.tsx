import { FC } from "react";
import styles from "./MovieMedallions.module.sass";
import Image from "next/image";
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getBackendImage } from "/src/utils/getBackendImg";
import { IPerson } from "/src/types/IPerson";
import { getPersonLastName, getPersonFirstName } from "/src/utils/person";

interface MovieMedallionsProps {
  movie: IMovie;
  persons: IPerson[] | undefined;
}

const MovieMedallions: FC<MovieMedallionsProps> = ({ movie, persons }) => {
  const { t } = useTranslation("movie");
  const { locale } = useRouter();

  return (
    <ul className={styles.medallions}>
      <li className={styles.medallion}>
        <div className={styles.medallion__wrapper}>
          <p className={styles.medallion__grade}>{movie.rating}</p>
        </div>
        <h4 className={styles.medallion__title}>{t("medallions.rating")}</h4>
        <h4 className={styles.medallion__title}>{t("medallions.ivi")}</h4>
      </li>
      {persons?.map((person, index) => (
        <li key={index} className={styles.medallion}>
          <div className={styles.medallion__wrapper}>
            <Image
              className={styles.medallion__avatar}
              height={44}
              width={44}
              src={getBackendImage(person.img)}
              alt={person.first_name_en}
            />
          </div>
          <h4 className={styles.medallion__title}>{getPersonFirstName(person, locale)}</h4>
          <h4 className={styles.medallion__title}>{getPersonLastName(person, locale)}</h4>
        </li>
      ))}
    </ul>
  );
};

export default MovieMedallions;
