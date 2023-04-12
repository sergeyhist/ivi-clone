import { ReactNode } from "react";
import css from "./CustomButton.module.scss";

export const CustomButton = ({
  text,
  icon,
  clickCallback,
  theme,
  padding,
}: {
  text?: string;
  icon?: ReactNode;
  clickCallback: () => void;
  theme?: "deafult" | "purple" | "red";
  padding?: string;
  width?: string;
  height?: string;
}) => {
  return (
    <button
      onClick={clickCallback}
      className={theme ? css.btn + " " + css.btn_red : css.btn}
    >
      {text && <span>{text}</span>}
      {icon && <span>{icon}</span>}
    </button>
  );
};
