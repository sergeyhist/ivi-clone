import { FC } from "react";
import styles from "./MovieBadge.module.sass";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const MovieBadge: FC<BadgeProps> = ({ children, className = "" }) => {
  return <span className={`${styles.badge} ${className}`}>{children}</span>;
};

export default MovieBadge;
