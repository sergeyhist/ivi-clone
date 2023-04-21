import { FC } from "react";
import styles from "./Badge.module.sass";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ children, className = "" }) => {
  return <p className={`${styles.badge} ${className}`}>{children}</p>;
};

export default Badge;
