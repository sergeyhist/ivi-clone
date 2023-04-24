import {FC} from "react";
import styles from "./MovieInfoModal.module.sass";
import {ICreator} from "/src/types/ICreator";
import CreatorsModalList from "/src/components/MovieInfoModal/CreatorsModalList/CreatorsModalList";

interface MovieInfoModalProps{
  creators: ICreator[],
}

const MovieInfoModal:FC<MovieInfoModalProps> = ({creators})=>{
  return(
    <div className={styles.container}>
      <CreatorsModalList creators={creators}/>
    </div>
  )
}

export default MovieInfoModal;
