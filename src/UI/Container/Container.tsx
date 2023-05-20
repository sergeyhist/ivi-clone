import { FC, ReactNode } from "react";
import styles from "./Container.module.sass";

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div data-testid="container" className={styles.container}>
      {children}
    </div>
  );
};

export default Container;
