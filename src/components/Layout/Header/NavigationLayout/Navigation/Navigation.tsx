import { Dispatch, FC, SetStateAction } from "react";
import styles from "./Navigation.module.sass";
import { DropDownType } from "../../Header.utils";
import { useTranslation } from "next-i18next";
import Link from "next/link";

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
    <nav className={styles.nav} data-testid="navigation">
      <ul className={styles.nav__list}>
        <Link
          className={styles.nav__item}
          onMouseEnter={() => setIsDropdownActive(false)}
          href="/"
          data-testid="nav-item-1"
        >
          <li>{t("navigation.0")}</li>
        </Link>
        <Link
          className={styles.nav__item}
          onMouseEnter={() => setIsDropdownActive(false)}
          href="https://www.ivi.ru/new"
          target="_blank"
          data-testid="nav-item-2"
        >
          <li>{t("navigation.1")}</li>
        </Link>

        <Link
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("movies");
          }}
          href="/movies"
          data-testid="nav-item-3"
        >
          <li>{t("navigation.2")}</li>
        </Link>
        <Link
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("series");
          }}
          href="https://www.ivi.ru/series"
          target="_blank"
          data-testid="nav-item-4"
        >
          <li>{t("navigation.3")}</li>
        </Link>
        <Link
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("cartoons");
          }}
          href="https://www.ivi.ru/animation"
          target="_blank"
          data-testid="nav-item-5"
        >
          <li>{t("navigation.4")}</li>
        </Link>
        <Link
          className={styles.nav__item}
          onMouseEnter={() => {
            setIsDropdownActive(true);
            setDropDownType("tv");
          }}
          href="https://www.ivi.ru/tvplus"
          target="_blank"
          data-testid="nav-item-6"
        >
          <li>TV+</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
