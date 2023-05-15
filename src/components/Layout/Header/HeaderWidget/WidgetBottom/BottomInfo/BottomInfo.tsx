import { FC } from "react";
import styles from "./BottomInfo.module.sass";
import { useTranslation } from "next-i18next";

const BottomInfo: FC = () => {
  const { t } = useTranslation("header");

  return (
    <div className={styles.info} data-testid="bottom-info">
      <div className={styles.info__logo} />
      <span className={styles.info__title}>
        {t("headerWidget.widgetTitle")}
      </span>
      <span className={styles.info__description}>
        {t("headerWidget.widgetPrice")}
      </span>
    </div>
  );
};

export default BottomInfo;
