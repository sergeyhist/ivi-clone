import { FC, ReactNode } from "react";
import styles from "./MoviesLayout.module.sass";
import Container from "/src/UI/Container/Container";

interface MoviesLayoutProps {
  children: ReactNode;
}

const MoviesLayout: FC<MoviesLayoutProps> = ({ children }) => {
  return (
    <Container>
      <div className={styles.layout}>{children}</div>
    </Container>
  );
};
export default MoviesLayout;
