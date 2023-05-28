import { FC } from "react";
import styles from "./MovieMedallions.module.sass";
import Image from "next/image";
import { IMovie } from "/src/types/IMovie";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { getBackendImage } from "/src/utils/getBackendImg";
import { IPerson } from "/src/types/IPerson";
import { getPersonLastName, getPersonFirstName } from "../../../../../utils/person";
import Link from "next/link";

interface MovieMedallionsProps {
  movie: IMovie;
  persons: IPerson[] | undefined;
}

const MovieMedallions: FC<MovieMedallionsProps> = ({ movie, persons }) => {
  const { t } = useTranslation("movie");
  const { locale } = useRouter();
  const gradeClassName = movie.rating > 6 ? styles.medallion__grade_fine : "";
  const rating = String(movie.rating);

  return (
    <ul data-testid="medallions" className={styles.medallions}>
      <li className={styles.medallion}>
        <div className={styles.medallion__wrapper}>
          <p
            data-testid="medallions-rating"
            className={`${styles.medallion__grade} ${gradeClassName}`}
          >
            {rating[0]},{rating[2] || "0"}
          </p>
        </div>
        <h4 className={styles.medallion__title}>{t("medallions.rating")}</h4>
        <h4 className={styles.medallion__title}>{t("medallions.ivi")}</h4>
      </li>
      {persons?.map((person, index) => (
        <li key={index} className={styles.medallion}>
          <Link
            href={"/person/" + person.person_id}
            className={styles.medallion__wrapper}
          >
            <Image
              className={styles.medallion__avatar}
              height={44}
              width={44}
              src={getBackendImage(person.img)}
              alt={person.first_name_en}
              placeholder="blur"
              blurDataURL="/images/placeholder.svg"
            />
          </Link>
          <h4 className={styles.medallion__title}>
            {getPersonFirstName(person, locale)}
          </h4>
          <h4 className={styles.medallion__title}>
            {getPersonLastName(person, locale)}
          </h4>
        </li>
      ))}
    </ul>
  );
};

export default MovieMedallions;
