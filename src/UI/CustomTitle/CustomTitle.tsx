import { FC, ReactNode } from "react";
import styles from "./CustomTitle.module.sass";

interface CustomTitleProps {
  children: ReactNode;
  type?: "default" | "link" | "underline" | "custom";
  className?: string;
  clickCallback?: void;
}

const CustomTitle: FC<CustomTitleProps> = ({
  children,
  type = "default",
  className = "",
}) => {
  return (
    <div className={styles.wrapper}>
      {type === "default" && (
        <h2 className={`${styles.title} ${className}`}>{children}</h2>
      )}
      {type === "link" && (
        <h2 className={`${styles.title} ${styles.title_link} ${className}`}>
          {children}
        </h2>
      )}
      {type === "underline" && (
        <h2 className={`${styles.title} ${styles.title_underline} ${className}`}>
          {children}
        </h2>
      )}
    </div>
  );
};

export default CustomTitle;
