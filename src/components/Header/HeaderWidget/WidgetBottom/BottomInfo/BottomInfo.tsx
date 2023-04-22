import { FC } from "react";
import styles from "./BottomInfo.module.sass";
import {useTranslation} from "react-i18next";

const BottomInfo: FC = () => {
    const {t} = useTranslation();

  return (
    <div className={styles.info}>
      <div className={styles.info__logo} />
      <span className={styles.info__title}>{t("header.headerWidget.widgetTitle")}</span>
      <span className={styles.info__description}>{t("header.headerWidget.widgetPrice")}</span>
    </div>
  );
};

export default BottomInfo;
