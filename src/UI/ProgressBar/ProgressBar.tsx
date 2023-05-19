import { FC, useState } from "react";
import styles from "./ProgressBar.module.sass";
import { useRouter } from "next/router";
import { useLoadingProgress } from "/src/hooks/useLoadingProgress";

interface ProgressBarProps {
  value: number;
  className?: string;
  isFixed?: boolean;
  type?: "default" | "loading";
}

const ProgressBar: FC<ProgressBarProps> = ({
  value,
  className = "",
  isFixed = false,
  type = "default",
}) => {
  const router = useRouter();

  const [loadingProgress, setLoadingProgress] = useState(0);

  const fixedBar = isFixed ? ` ${styles.bar_fixed}` : "";

  useLoadingProgress(router, type === "loading", setLoadingProgress);

  if (type === "loading" && loadingProgress === 0) {
    return <></>;
  }

  return (
    <div
      data-testid="progress-bar"
      className={`${styles.bar} ${className}` + fixedBar}
    >
      <div
        style={{
          width: `${type === "loading" ? loadingProgress : value}%`,
        }}
        className={styles.value}
      ></div>
    </div>
  );
};

export default ProgressBar;
