import {FC} from "react";
import Links from "/src/components/Header/DropDown/Links/Links";
import styles from './LinkList.module.sass';
import {DropDownType, getLinksSectionTitles} from "/src/components/Header/Header.utils";

interface LinkListProps {
  selectedGenre: DropDownType
}

const LinkList: FC<LinkListProps> = ({selectedGenre}) => {
  return (
    <div className={styles.list}>
      <div>
        <Links linksSection={getLinksSectionTitles('Жанры', selectedGenre)}/>
      </div>
      <div className={styles.list__container}>
        <Links linksSection={getLinksSectionTitles('Страны', selectedGenre)}/>
        <Links linksSection={getLinksSectionTitles('Годы', selectedGenre)}/>
      </div>
    </div>
  )
}

export default LinkList;
