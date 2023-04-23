import styles from "./MovieCard.module.sass";

export const getTypeTitle = (type: number) => {
  switch (type) {
    case 1:
      return "Покупка";
    case 2:
      return "Бесплатно";
    default:
      return "Подписка";
  }
};

export const getTypeClassName = (type: number) => {
  switch (type) {
    case 1:
      return `${styles.slide__type} ${styles.slide__type_purchase}`;
    case 2:
      return `${styles.slide__type}`;
    default:
      return `${styles.slide__type} ${styles.slide__type_subscription}`;
  }
};
