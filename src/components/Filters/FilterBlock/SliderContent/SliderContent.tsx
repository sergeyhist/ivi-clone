import { FC } from "react";
import {useTranslation} from "react-i18next";
import styles from "./SliderContent.module.sass";

interface SliderContentProps {
  icon?: string;
  text: string;
}

const SliderContent: FC<SliderContentProps> = ({ icon, text }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.content}>
      {icon && <div className={styles.content__icon}>{icon}</div>}
      <div>{t(text)}</div>
    </div>
  );
};

export default SliderContent;
