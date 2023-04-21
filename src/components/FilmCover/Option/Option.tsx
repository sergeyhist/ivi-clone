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
      <p className={styles.option__values}>{children}</p>
    </div>
  );
};

export default Option;
