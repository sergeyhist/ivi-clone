import { FC } from "react";
import styles from "./Raiting.module.sass";

interface RaitingProps {
  grade: string;
  title: string;
  category: string;
  grades: string;
}

const Raiting: FC<RaitingProps> = ({ grade, title, category, grades }) => {
  return (
    <div className={styles.raiting}>
      <button className={styles.raiting__button}>
        <p className={styles.raiting__grade}>{grade}</p>
        <div className={styles.raiting__column}>
          <p className={styles.raiting__title}>{title}</p>
          <p className={styles.raiting__category}>{category}</p>
          <p className={styles.raiting__grades}>{grades} оценок</p>
        </div>
        <p className={styles.raiting__badge}>Оценить</p>
      </button>
    </div>
  );
};

export default Raiting;
