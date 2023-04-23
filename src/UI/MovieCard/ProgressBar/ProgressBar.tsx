import { FC } from "react";
import styles from "./ProgressBar.module.sass";

interface ProgressBarProps {
  value: number;
  className?: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ value, className = "" }) => {
  return (
    <div className={`${styles.bar} ${className}`}>
      <div style={{ width: `${value}%` }} className={styles.value}></div>
    </div>
  );
};

export default ProgressBar;
