import { FC } from "react";
import styles from "./CustomTitle.module.sass";
import Link from "next/link";

interface CustomTitleProps {
  title: string;
  type?: "default" | "link" | "underline";
  href?: string;
  className?: string;
}

const CustomTitle: FC<CustomTitleProps> = ({
  title,
  type = "default",
  href = "/",
  className = "",
}) => {
  return (
    <div className={styles.wrapper}>
      {type === "default" && <h2 className={`${styles.title} ${className}`}>{title}</h2>}
      {type === "link" && (
        <Link href={href} className={styles.link}>
          <h2 className={`${styles.title} ${styles.title_link} ${className}`}>{title}</h2>
        </Link>
      )}
      {type === "underline" && (
        <Link href={href} className={styles.link}>
          <h2 className={`${styles.title} ${styles.title_underline} ${className}`}>{title}</h2>
        </Link>
      )}
    </div>
  );
};

export default CustomTitle;
