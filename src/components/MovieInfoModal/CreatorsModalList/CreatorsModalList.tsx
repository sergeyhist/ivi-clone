import {FC} from "react";
import styles from "./CreatorsModalList.module.sass";
import {ICreator} from "/src/types/ICreator";
import Creators from "/src/components/MovieInfoModal/CreatorsModalList/Creators/Creators";

interface CreatorsModalListProps{
  creators: ICreator[]
}

const CreatorsModalList:FC<CreatorsModalListProps> = ({creators})=>{
  const directors = creators.filter(creator => creator.role === "режиссёр");
  const actors = creators.filter(creator => creator.role === "актёр");

  return(
    <div className={styles.container}>
      <div className={styles.creators__container}>
        <h2 className={styles.creators__title}>Режиссёры</h2>
        <Creators creators={directors}/>
      </div>
      <div className={styles.creators__container}>
        <h2 className={styles.creators__title}>Актёры</h2>
        <Creators creators={actors}/>
      </div>
    </div>
  )
}

export default CreatorsModalList;
