import { FC } from "react";
import styles from "./MovieTitle.module.sass";

interface IMovieTitleProps {
  title: string;
  year: number;
}

const MovieTitle: FC<IMovieTitleProps> = ({ title, year }) => {
  return (
    <h1 className={styles.title}>
      {title} ({year})
    </h1>
  );
};

export default MovieTitle;
