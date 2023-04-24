import {FC, ReactNode, useState} from "react";
import styles from "./MovieInfoModal.module.sass";
import {ICreator} from "/src/types/ICreator";
import CreatorsModalList from "/src/components/MovieInfoModal/CreatorsModalList/CreatorsModalList";
import {InfoTabs} from "/src/components/MovieInfoModal/MovieInfoModal.utils";

interface MovieInfoModalProps{
  creators: ICreator[],
  movieTitle: string
}

const MovieInfoModal:FC<MovieInfoModalProps> = ({creators,movieTitle})=>{
  const [selectedTab,setSelectedTab] = useState<InfoTabs>("actors");

  const getSelectedTab = (tab: InfoTabs):ReactNode =>{
    switch (tab){
      case "actors":
        return <CreatorsModalList creators={creators}/>
      case "comments":
        return <div>2</div>;
    }
  }

  return(
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{movieTitle} актёры и создатели фильма</h2>
        <div className={styles.tabs__list_wrapper}>
          <ul className={styles.tabs__list}>
            <li className={`${styles.tabs__item} ${selectedTab === 'actors' ? styles.active : ""}`} onClick={()=>setSelectedTab('actors')} >Создатели</li>
            <li className={`${styles.tabs__item} ${selectedTab === 'comments' ? styles.active : ""}`} onClick={()=>setSelectedTab('comments')}>Отзывы</li>
          </ul>
        </div>
        <div className={styles.tabs__content}>
          {
            getSelectedTab(selectedTab)
          }
        </div>
      </div>
    </div>
  )
}

export default MovieInfoModal;
