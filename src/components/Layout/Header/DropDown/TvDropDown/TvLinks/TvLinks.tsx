import { FC } from "react";
import styles from "./TvLinks.module.sass";
import { useTranslation } from "next-i18next";
import { tvLinks } from "../TvDropDown.utils";

const TvLinks: FC = () => {
  const { t } = useTranslation("header");

  return (
    <div className={styles.tv__links} data-testid="tv-links">
      <h2 className={styles.tv__links_title}>{t("tv.links.0")}</h2>
      <ul className={styles.tv__links_list}>
        {tvLinks.links.map((link, i) => {
          return (
            <li className={styles.list__item} key={i}>
              <a href={link} target="_blank">
                {t(`tv.links.${i + 1}`)}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TvLinks;
