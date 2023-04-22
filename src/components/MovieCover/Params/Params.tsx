import { FC } from "react";
import styles from "./Params.module.sass";
import Link from "next/link";

const Params: FC = () => {
  return (
    <div className={styles.params}>
      <ul className={styles.list}>
        <li className={styles.list__item}>2011</li>
        <li className={styles.list__item}>1 ч. 52 мин.</li>
        <li className={styles.list__item}>16+</li>
      </ul>
      <ul className={styles.list}>
        <li className={`${styles.list__item} ${styles.list__item_dot}`}>
          <Link href={"/"} className={styles.list__link}>
            Франция
          </Link>
        </li>
        <li className={`${styles.list__item} ${styles.list__item_dot}`}>
          <Link href={"/"} className={styles.list__link}>
            Драмы
          </Link>
        </li>
        <li className={`${styles.list__item} ${styles.list__item_dot}`}>
          <Link href={"/"} className={styles.list__link}>
            Комедии
          </Link>
        </li>
        <li className={`${styles.list__item} ${styles.list__item_dot}`}>
          <Link href={"/"} className={styles.list__link}>
            Биография
          </Link>
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.list__item}>
          <p className={styles.list__badge}>FullHD</p>
        </li>
        <li className={styles.list__item}>
          <i className={`${styles.icon} ${styles.icon_sound}`}></i>Рус
        </li>
        <li className={styles.list__item}>
          <i className={`${styles.icon} ${styles.icon_label}`}></i>Рус
        </li>
      </ul>
    </div>
  );
};

export default Params;
