import { FC } from "react";
import styles from "./MovieOption.module.sass";

interface OptionProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

const MovieOption: FC<OptionProps> = ({ children, title, className = "" }) => {
  return (
    <div className={`${styles.option} ${className}`}>
      {title && <p className={styles.option__title}>{title}</p>}
      <div className={styles.option__values}>{children}</div>
    </div>
  );
};

export default MovieOption;
