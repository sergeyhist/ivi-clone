import { FC } from "react";
import styles from "./MovieTitle.module.sass";

interface IMovieTitleProps {
  title: string;
  year: number;
  type: string;
}

const MovieTitle: FC<IMovieTitleProps> = ({ title, year, type }) => {
  return (
    <h1 className={styles.title}>
      {title} ({type} {year})
    </h1>
  );
};

export default MovieTitle;
