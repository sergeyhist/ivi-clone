import {FC} from "react";
import styles from "./SubscriptionDropdown.module.sass";

const SubscriptionDropdown:FC = () => {
  return(
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Подписка Иви</h2>
        <p>Стоимость 399 ₽ в месяц, продление автоматическое</p>
      </div>
    </div>
  )
}

export default SubscriptionDropdown;
