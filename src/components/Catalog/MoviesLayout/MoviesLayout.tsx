import { FC, ReactNode } from "react";
import styles from "./MoviesLayout.module.sass";

interface MoviesLayoutProps {
  children: ReactNode;
}

const MoviesLayout: FC<MoviesLayoutProps> = ({ children }) => {
  return <div className={styles.layout + ' container'}>{children}</div>;
};
export default MoviesLayout;
