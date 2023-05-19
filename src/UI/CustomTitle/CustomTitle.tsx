import { FC } from "react";
import styles from "./CustomTitle.module.sass";

interface CustomTitleProps {
  title: string;
  type?: "default" | "link" | "underline" | "large" | "medium" | "small";
  className?: string;
}

const CustomTitle: FC<CustomTitleProps> = ({
  title,
  type = "default",
  className = "",
}) => {
  const typeClassName = styles["title_" + type];

  return (
    <h1
      data-testid="title"
      className={`${styles.title} ${typeClassName} ${className}`}
    >
      {title}
    </h1>
  );
};

export default CustomTitle;
