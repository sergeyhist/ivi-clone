import { FC } from "react";
import styles from "./CustomTitle.module.sass";

interface CustomTitleProps {
  title: string;
  type?: "default" | "link" | "underline" | "large" | "medium" | "small";
  className?: string;
  clickCallback?: void;
}

const CustomTitle: FC<CustomTitleProps> = ({
  title,
  type = "default",
  className = "",
}) => {
  const typeClassName = styles["title_" + type];

  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.title} ${typeClassName} ${className}`}>{title}</h1>
    </div>
  );
};

export default CustomTitle;
