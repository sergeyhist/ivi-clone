import styles from "./MobileMenu.module.sass";

export const getLinkIndex = (path: string): number | null => {
  if (path === "/") return 0;
  if (path.includes("movies")) return 1;
  return null;
};

export const tabsLinks = [
  "/",
  "/movies",
  "https://www.ivi.ru/search",
  "https://www.ivi.ru/tvplus",
  "https://www.ivi.ru/?navigation",
];
export const iconsClassNames = [
  styles.content__item__home,
  styles.content__item__catalogue,
  styles.content__item__search,
  styles.content__item__tv,
  styles.content__item__more,
];
