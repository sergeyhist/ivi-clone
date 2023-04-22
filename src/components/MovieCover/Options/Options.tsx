import { FC } from "react";
import styles from "./Options.module.sass";

interface OptionsProps {
  children: React.ReactNode;
}

const Options: FC<OptionsProps> = ({ children }) => {
  return <div className={styles.options}>{children}</div>;
};

export default Options;
