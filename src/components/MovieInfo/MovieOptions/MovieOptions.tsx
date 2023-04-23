import { FC } from "react";
import styles from "./MovieOptions.module.sass";

interface OptionsProps {
  children: React.ReactNode;
}

const MovieOptions: FC<OptionsProps> = ({ children }) => {
  return <div className={styles.options}>{children}</div>;
};

export default MovieOptions;
