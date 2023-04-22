import {FC} from "react";
import styles from "./TvLinks.module.sass"
import {useTranslation} from "react-i18next";
import {tvLinks} from "/src/components/Header/DropDown/TvDropDown/TvDropDown.utils";

const TvLinks: FC = () => {
  const {t} = useTranslation();

  return (
    <div className={styles.tv__links}>
      <h2 className={styles.tv__links_title}>{t("header.tv.links.0")}</h2>
      <ul className={styles.tv__links_list}>
        {
          tvLinks.links.map((link, i) => {
            return (
              <li className={styles.list__item} key={i}>
                <a href={link} target='_blank'>{t(`header.tv.links.${i + 1}`)}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default TvLinks;
