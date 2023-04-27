import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Navigation.module.sass";
import { DropDownType } from "/src/components/Header/Header.utils";
import { useTranslation } from "react-i18next";

interface NavigationProps {
  setIsDropdownActive: Dispatch<SetStateAction<boolean>>;
  setDropDownType: Dispatch<SetStateAction<DropDownType>>;
}

const Navigation: FC<NavigationProps> = ({
  setIsDropdownActive,
  setDropDownType,
}) => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li
          className={styles.nav__item}
          onMouseEnter={() => setIsDropdownActive(false)}
        >
          {t("header.navigation.0")}
        </li>
        <li
          className={styles.nav__item}
          onMouseEnter={() => setIsDropdownActive(false)}
        >
          {t("header.navigation.1")}
        </li>
        <li
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("movies");
          }}
        >
          {t("header.navigation.2")}
        </li>
        <li
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("series");
          }}
        >
          {t("header.navigation.3")}
        </li>
        <li
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("cartoons");
          }}
        >
          {t("header.navigation.4")}
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
