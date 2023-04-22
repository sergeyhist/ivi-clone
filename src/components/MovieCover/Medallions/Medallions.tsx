import { FC } from "react";
import styles from "./Medallions.module.sass";
import Image from "next/image";

const Medallions: FC = () => {
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
      <li className={styles.medallion}>
        <div className={styles.medallion__wrapper}>
          <Image
            className={styles.medallion__avatar}
            height={44}
            width={44}
            src="/images/avatar1.jpeg"
            alt="avatar"
          />
        </div>
        <p className={styles.medallion__text}>Франсуа Клюзе</p>
      </li>
      <li className={styles.medallion}>
        <div className={styles.medallion__wrapper}>
          <Image
            className={styles.medallion__avatar}
            height={44}
            width={44}
            src="/images/avatar1.jpeg"
            alt="avatar"
          />
        </div>
        <p className={styles.medallion__text}>Франсуа Клюзе</p>
      </li>
      <li className={styles.medallion}>
        <div className={styles.medallion__wrapper}>
          <Image
            className={styles.medallion__avatar}
            height={44}
            width={44}
            src="/images/avatar1.jpeg"
            alt="avatar"
          />
        </div>
        <p className={styles.medallion__text}>Франсуа Клюзе</p>
      </li>
      <li className={styles.medallion}>
        <div className={styles.medallion__wrapper}>
          <Image
            className={styles.medallion__avatar}
            height={44}
            width={44}
            src="/images/avatar1.jpeg"
            alt="avatar"
          />
        </div>
        <p className={styles.medallion__text}>Франсуа Клюзе</p>
      </li>
      <li className={styles.medallion}>
        <div className={styles.medallion__wrapper}>
          <Image
            className={styles.medallion__avatar}
            height={44}
            width={44}
            src="/images/avatar1.jpeg"
            alt="avatar"
          />
        </div>
        <p className={styles.medallion__text}>Франсуа Клюзе</p>
      </li>
    </ul>
  );
};

export default Medallions;
