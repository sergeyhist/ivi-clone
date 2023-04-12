import { FC, ReactNode } from "react";
import styles from "./CustomButton.module.sass";

interface CustomButtonProps {
  children: ReactNode;
  text?: string;
  icon?: ReactNode;
  clickCallback: () => void;
  type?: "purple" | "red" | "icon";
  padding?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  lineHeight?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  clickCallback,
  type,
  children,
  padding,
  width,
  height,
  fontSize,
  lineHeight,
}) => {
  return (
    <button
      onClick={clickCallback}
      style={{
        width: width ? width : '',
        height: height ? height : '',
        padding: padding ? padding : '',
        fontSize: fontSize ? fontSize : '',
        lineHeight: lineHeight ? lineHeight : '',
      }}
      className={type ? styles.btn + " " + styles[`btn_${type}`] : styles.btn}
    >
      <div className={styles.btn__content}>{children}</div>
    </button>
  );
};

export default CustomButton;
