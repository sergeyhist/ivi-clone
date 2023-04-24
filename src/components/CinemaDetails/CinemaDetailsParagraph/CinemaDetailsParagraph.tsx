import { FC } from "react";
import styles from "./CinemaDetails.module.sass";

const CinemaDetailsParagraph: FC = () => {
  return (
    <p className={styles.dropdown__paragraf}>
      Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном
      качестве с кинотеатром Иви!
    </p>
  );
};

export default CinemaDetailsParagraph;
