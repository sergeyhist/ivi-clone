import { FC } from "react";
import styles from "./IconButtons.module.sass";

const IconButtons: FC = () => {
  return (
    <div className={styles.icons}>
      <button data-tooltip-id="save" data-tooltip-place={"top"} className={styles.icons__button}>
        <i className={`${styles.icon_save} ${styles.icon}`}></i>
      </button>
      <button data-tooltip-id="similar" data-tooltip-place={"top"} className={styles.icons__button}>
        <i className={`${styles.icon_similar} ${styles.icon}`}></i>
      </button>
      <button data-tooltip-id="favorite" data-tooltip-place={"top"} className={styles.icons__button}>
        <i className={`${styles.icon_star} ${styles.icon}`}></i>
      </button>
      <button data-tooltip-id="block" data-tooltip-place={"top"} className={styles.icons__button}>
        <i className={`${styles.icon_block} ${styles.icon}`}></i>
      </button>
    </div>
  );
};

export default IconButtons;
