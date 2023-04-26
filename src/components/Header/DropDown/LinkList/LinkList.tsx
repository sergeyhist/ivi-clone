import {FC} from "react";
import Links from "/src/components/Header/DropDown/Links/Links";
import styles from './LinkList.module.sass';
import {DropDownType, getLinksSectionTitles} from "/src/components/Header/Header.utils";
import {useTranslation} from "react-i18next";

interface LinkListProps {
  selectedGenre: DropDownType
}

const LinkList: FC<LinkListProps> = ({selectedGenre}) => {
  const {t} = useTranslation();

  return (
    <div className={styles.list}>
      <div>
        <Links title={t('header.genreTitles.0')} linksSection={getLinksSectionTitles('genres', selectedGenre)}/>
      </div>
      <div className={styles.list__container}>
        <Links title={t('header.genreTitles.1')} linksSection={getLinksSectionTitles('countries', selectedGenre)}/>
        <Links title={t('header.genreTitles.2')} linksSection={getLinksSectionTitles('years', selectedGenre)}/>
      </div>
    </div>
  )
}

export default LinkList;
