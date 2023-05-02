import { FC } from "react";
import Links from "../Links/Links";
import styles from "./LinkList.module.sass";
import { DropDownType, getLinksSectionTitles } from "../../Header.utils";
import { useTranslation } from "next-i18next";

interface LinkListProps {
  selectedGenre: DropDownType;
}

const LinkList: FC<LinkListProps> = ({ selectedGenre }) => {
  const { t } = useTranslation("header");

  return (
    <div className={styles.list}>
      <div>
        <Links
          title={t("genreTitles.0")}
          linksSection={getLinksSectionTitles("genres", selectedGenre)}
        />
      </div>
      <div className={styles.list__container}>
        <Links
          title={t("genreTitles.1")}
          linksSection={getLinksSectionTitles("countries", selectedGenre)}
        />
        <Links
          title={t("genreTitles.2")}
          linksSection={getLinksSectionTitles("years", selectedGenre)}
        />
      </div>
    </div>
  );
};

export default LinkList;
