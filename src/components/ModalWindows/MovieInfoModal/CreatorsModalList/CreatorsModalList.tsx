import {FC} from "react";
import styles from "./CreatorsModalList.module.sass";
import {ICreator} from "/src/types/ICreator";
import Creators from "/src/components/ModalWindows/MovieInfoModal/CreatorsModalList/Creators/Creators";
import {useTranslation} from "react-i18next";

interface CreatorsModalListProps{
  creators: ICreator[]
}

const CreatorsModalList:FC<CreatorsModalListProps> = ({creators})=>{
  const { t } = useTranslation();
  
  const directors = creators.filter(creator => creator.role === "режиссёр");
  const actors = creators.filter(creator => creator.role === "актёр");

  return (
    <div className={styles.container}>
      <div className={styles.creators__container}>
        <h2 className={styles.creators__title}>{t("movieInfo.creators.0")}</h2>
        <Creators creators={directors} />
      </div>
      <div className={styles.creators__container}>
        <h2 className={styles.creators__title}>{t("movieInfo.creators.1")}</h2>
        <Creators creators={actors} />
      </div>
    </div>
  );
}

export default CreatorsModalList;
