import { FC, ReactNode } from "react";
import styles from "./PersonLayout.module.sass";
import Container from "/src/UI/Container/Container";

interface PersonLayoutProps {
  children: ReactNode;
}

const PersonLayout: FC<PersonLayoutProps> = ({ children }) => {
  return (
    <Container>
      <div className={styles.layout} data-testid="person-layout">{children}</div>
    </Container>
  );
};

export default PersonLayout;
