import { FC, ReactNode } from "react";
import styles from "./CustomButton.module.sass";

interface CustomButtonProps {
  children: ReactNode;
  text?: string;
  icon?: ReactNode;
  clickCallback: () => void;
  theme?: "deafult" | "purple" | "red" | "icon";
  padding?: string;
  width?: string;
  height?: string;
  fontSize?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  clickCallback,
  theme,
  children,
  padding,
  width,
  height,
  fontSize,
}) => {
  return (
    <button
      onClick={clickCallback}
      style={{
        width: width ? width : '',
        height: height ? height : '',
        padding: padding ? padding : ''
      }}
      className={theme ? styles.btn + " " + styles[`btn_${theme}`] : styles.btn}
    >
      <div className={styles.btn__content}>{children}</div>
    </button>
  );
};

export default CustomButton;
