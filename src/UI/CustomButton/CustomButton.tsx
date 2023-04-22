import { CSSProperties } from "react";
import { FC, ReactNode } from "react";
import styles from "./CustomButton.module.sass";

interface CustomButtonProps {
  className?: string;
  children: ReactNode;
  clickCallback?: () => void;
  type?: "purple" | "red" | "promo" | "icon";
  style?: CSSProperties;
  preventDefault?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  className,
  children,
  clickCallback,
  type,
  style,
  preventDefault,
}) => {
  const classNames = className ? ` ${className}` : "";
  const typeSelector = type
    ? ` ${styles.btn} ${styles[`btn_${type}`]}`
    : styles.btn;

  return (
    <button
      onClick={(e) => {
        preventDefault && e.preventDefault();
        clickCallback && clickCallback();
      }}
      style={style}
      className={typeSelector + classNames + " unselectable"}
    >
      <div className={styles.btn__content}>{children}</div>
    </button>
  );
};

export default CustomButton;
