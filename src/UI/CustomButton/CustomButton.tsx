import { FC, ReactNode } from "react";
import styles from "./CustomButton.module.sass";

interface CustomButtonProps {
  className?: string;
  children: ReactNode;
  clickCallback?: () => void;
  type?: "purple" | "red" | "pattern";
  padding?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  lineHeight?: string;
  flex?: string;
  borderRadius?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  className,
  children,
  clickCallback,
  type,
  padding,
  width,
  height,
  fontSize,
  lineHeight,
  flex,
  borderRadius,
}) => {
  const classNames = className ? " " + className: "";
  const typeSelector = type
    ? styles.btn + " " + styles[`btn_${type}`]
    : styles.btn;

  const styleSelector = {
    padding: padding ? padding : "9px 15px",
    flex: flex ? flex : "none",
    width: width ? width : "auto",
    height: height ? height : "40px",
    fontSize: fontSize ? fontSize : "15px",
    lineHeight: lineHeight ? lineHeight : "20px",
    borderRadius: borderRadius ? borderRadius : "8px",
  };

  return (
    <button
      onClick={clickCallback}
      style={styleSelector}
      className={typeSelector + classNames + " unselectable"}
    >
      <div className={styles.btn__content}>{children}</div>
    </button>
  );
};

export default CustomButton;
