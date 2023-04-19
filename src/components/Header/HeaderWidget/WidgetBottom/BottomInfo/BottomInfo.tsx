import { FC } from "react";
import styles from "./BottomInfo.module.sass";

const BottomInfo: FC = () => {
  return (
    <div className={styles.info}>
      <div className={styles.info__logo} />
      <span className={styles.info__title}>Подписка Иви</span>
      <span className={styles.info__description}>От 199 ₽ за месяц</span>
    </div>
  );
};

export default BottomInfo;
