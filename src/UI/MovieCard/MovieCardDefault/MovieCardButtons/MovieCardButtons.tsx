import { FC } from "react";
import styles from "./MovieCardButtons.module.sass";
import { buttonsId } from "../../../../utils/movieCard";
import { useTranslation } from "next-i18next";

const MovieCardButtons: FC = () => {
  const { t } = useTranslation("common");

  return (
    <div className={styles.buttons}>
      {buttonsId.map((id, index) => (
        <button
          key={index}
          data-tooltip-id={"movie-tooltip"}
          data-tooltip-place={"top"}
          data-tooltip-delay-show={100}
          data-tooltip-content={`${t(`tooltips.${id}`)}`}
          className={styles.buttons__button}
        >
          <i className={`${styles[`icon_${id}`]} ${styles.icon}`}></i>
        </button>
      ))}
    </div>
  );
};

export default MovieCardButtons;
