import { FC, ReactNode } from "react";
import { useTranslation } from "next-i18next";
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
  const { t } = useTranslation("footer");

  return (
    <div className={styles.btn}>
      <div className={styles.btn__icon}>{icon}</div>
      <div className={styles.btn__text}>
        {topText && <span className={styles.btn__top}>{t(topText)}</span>}
        <span className={styles.btn__bottom}>
          {topText ? bottomText : t(bottomText)}
        </span>
      </div>
    </div>
  );
};

export default ButtonContent;
