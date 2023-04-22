import { FC } from "react";
import styles from "./FilmButton.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";

interface FilmButtonProps {
  children: React.ReactNode;
  className?: string;
}

const FilmButton: FC<FilmButtonProps> = ({ children, className = "" }) => {
  return (
    <CustomButton type="dark" className={`${styles.button} ${styles.button_desctop} ${className}`}>
      <div className={styles.button__content}>{children}</div>
    </CustomButton>
  );
};

export default FilmButton;
