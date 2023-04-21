import styles from "./TabBar.module.sass";

export type Tabs = "home" | "catalogue" | "search" | "tv" | "more" | "";

export const iconsClassNames = [
    styles.content__item__home,
    styles.content__item__catalogue,
    styles.content__item__search,
    styles.content__item__tv,
    styles.content__item__more
]