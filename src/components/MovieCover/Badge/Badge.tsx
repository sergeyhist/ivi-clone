import { FC } from "react";
import styles from "./Badge.module.sass";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ children, className = "" }) => {
  return <span className={`${styles.badge} ${className}`}>{children}</span>;
};

export default Badge;
