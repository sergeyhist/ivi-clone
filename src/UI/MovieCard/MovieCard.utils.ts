import styles from "./MovieCard.module.sass";

export const getTypeTitle = (type: number): string => {
  switch (type) {
    case 1:
      return "Покупка";
    case 2:
      return "Бесплатно";
    default:
      return "Подписка";
  }
};

export const getTypeClassName = (type: number): string => {
  switch (type) {
    case 1:
      return `${styles.access} ${styles.access_purchase}`;
    case 2:
      return `${styles.access}`;
    default:
      return `${styles.access} ${styles.access_subscription}`;
  }
};
