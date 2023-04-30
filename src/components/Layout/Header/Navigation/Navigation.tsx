import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Navigation.module.sass";
import { DropDownType } from "../Header.utils";
import { useTranslation } from "next-i18next";

interface NavigationProps {
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
  setDropDownType: Dispatch<SetStateAction<DropDownType>>;
}

const Navigation: FC<NavigationProps> = ({
  setIsDropdownActive,
  setDropDownType,
}) => {
  const { t } = useTranslation("header");

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li
          className={styles.nav__item}
          onMouseEnter={() => setIsDropdownActive(false)}
        >
          {t("navigation.0")}
        </li>
        <li
          className={styles.nav__item}
          onMouseEnter={() => setIsDropdownActive(false)}
        >
          {t("navigation.1")}
        </li>
        <li
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("movies");
          }}
        >
          {t("navigation.2")}
        </li>
        <li
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("series");
          }}
        >
          {t("navigation.3")}
        </li>
        <li
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("cartoons");
          }}
        >
          {t("navigation.4")}
        </li>
        <li
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("tv");
          }}
        >
          TV+
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
