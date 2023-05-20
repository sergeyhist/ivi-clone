import styles from "./BannerSlide.module.sass";

export const getClassName = (isActive: boolean): string => {
  if (isActive) return styles.slide;
  return `${styles.slide} ${styles.slide_hidden}`;
};
