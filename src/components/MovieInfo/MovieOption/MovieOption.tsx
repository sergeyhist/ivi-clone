import { FC } from "react";
import styles from "./MovieOption.module.sass";

interface MovieOptionProps {
  children: React.ReactNode;
  title?: string | undefined | null;
  className?: string;
}

const MovieOption: FC<MovieOptionProps> = ({
  children,
  title,
  className = "",
}) => {
  return (
    <div className={`${styles.option} ${className}`}>
      {title && <p className={styles.option__title}>{title}</p>}
      <div className={styles.option__values}>{children}</div>
    </div>
  );
};

export default MovieOption;
