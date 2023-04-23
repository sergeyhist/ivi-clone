import { FC } from "react";
import styles from "./MovieMedallions.module.sass";
import Image from "next/image";
import { ICreators } from "../MovieInfo.utils";

interface MovieMedallionsProps {
  creators: ICreators[];
}

const MovieMedallions: FC<MovieMedallionsProps> = ({ creators }) => {
  return (
    <ul className={styles.medallions}>
      <li className={styles.medallion}>
        <div className={styles.medallion__wrapper}>
          <p className={styles.medallion__grade}>8,7</p>
        </div>
        <p className={styles.medallion__text}>
          Рейтинг
          <br />
          Иви
        </p>
      </li>
      {creators.map((creator) => (
        <li key={creator.id} className={styles.medallion}>
          <div className={styles.medallion__wrapper}>
            <Image
              className={styles.medallion__avatar}
              height={44}
              width={44}
              src={creator.imgUrl}
              alt="avatar"
            />
          </div>
          <p className={styles.medallion__text}>{creator.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieMedallions;
