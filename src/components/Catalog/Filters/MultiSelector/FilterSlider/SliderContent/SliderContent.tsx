import { FC, ReactNode } from "react";
import { useTranslation } from "next-i18next";
import styles from "./SliderContent.module.sass";

interface SliderContentProps {
  icon?: ReactNode;
  text: string;
  isActive?: boolean;
  clickCallback: () => void;
}

const SliderContent: FC<SliderContentProps> = ({
  icon,
  text,
  isActive,
  clickCallback,
}) => {
  const { t } = useTranslation(["filters", "genres", "countries"]);

  const activeClassName = isActive ? ` ${styles.content_active}` : "";
  const onlyTextClassName = !icon ? ` ${styles[`content_text-only`]}` : "";

  return (
    <div
      data-testid="slider-content"
      onClick={clickCallback}
      className={styles.content + activeClassName + onlyTextClassName}
    >
      {icon && <span className={styles.content__icon}>{icon}</span>}
      <span className={styles.content__text}>{t(text)}</span>
    </div>
  );
};

export default SliderContent;
