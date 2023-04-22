import { FC } from "react";
import styles from "./Option.module.sass";

interface OptionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const Option: FC<OptionProps> = ({ children, title, className = "" }) => {
  return (
    <div className={`${styles.option} ${className}`}>
      {title && <p className={styles.option__title}>{title}</p>}
      <div className={styles.option__values}>{children}</div>
    </div>
  );
};

export default Option;
