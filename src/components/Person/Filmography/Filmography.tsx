import {FC, useState} from "react";
import styles from "./Filmography.module.sass";
import {IMovie} from "/src/types/IMovie";

interface FilmographyProps{
  moviesId: string[];
}

const Filmography:FC<FilmographyProps> = ({moviesId})=>{
  const [movies,SetMovies] = useState<IMovie[]>([]);

  return(
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>

        </div>
      </div>
    </section>
  )
}

export default Filmography;
