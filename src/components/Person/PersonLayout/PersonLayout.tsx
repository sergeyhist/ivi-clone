import { FC, ReactNode } from "react";
import styles from "./PersonLayout.module.sass";

interface PersonLayoutProps {
  children: ReactNode;
}

const PersonLayout: FC<PersonLayoutProps> = ({ children }) => {
  return <div className={styles.layout + " container"}>{children}</div>;
};

export default PersonLayout;
