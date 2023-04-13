import { FC, ReactNode } from "react";
import styles from "./ButtonContent.module.sass";

interface ButtonContentProps {
  icon: ReactNode;
  topText?: string;
  bottomText: string;
}

const ButtonContent: FC<ButtonContentProps> = ({
  icon,
  topText,
  bottomText,
}) => {
  return (
    <div className={styles.btn}>
      <div className={styles.btn__icon}>{icon}</div>
      <div className={styles.btn__text}>
        {topText && <span className={styles.btn__top}>{topText}</span>}
        <span className={styles.btn__bottom}>{bottomText}</span>
      </div>
    </div>
  );
};

export default ButtonContent;
