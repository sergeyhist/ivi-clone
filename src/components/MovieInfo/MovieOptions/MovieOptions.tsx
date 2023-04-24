import { FC } from "react";
import styles from "./MovieOptions.module.sass";

interface MovieOptionsProps {
  children: React.ReactNode;
}

const MovieOptions: FC<MovieOptionsProps> = ({ children }) => {
  return <div className={styles.options}>{children}</div>;
};

export default MovieOptions;
