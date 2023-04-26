import { FC } from "react";
import styles from "./MovieCardButtons.module.sass";
import { buttonsId } from "../../../../utils/movieCard";

const MovieCardButtons: FC = () => {
  return (
    <div className={styles.buttons}>
      {buttonsId.map((id, index) => (
        <button
          key={index}
          data-tooltip-id={id}
          data-tooltip-place={"top"}
          className={styles.buttons__button}
        >
          <i className={`${styles[`icon_${id}`]} ${styles.icon}`}></i>
        </button>
      ))}
    </div>
  );
};

export default MovieCardButtons;
