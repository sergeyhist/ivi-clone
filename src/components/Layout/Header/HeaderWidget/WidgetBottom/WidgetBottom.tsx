import { FC } from "react";
import BottomInfo from "./BottomInfo/BottomInfo";
import styles from "./WidgetBottom.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { useTranslation } from "next-i18next";

interface WidgetBottomProps {
  isBottomActive: boolean;
}

const WidgetBottom: FC<WidgetBottomProps> = ({ isBottomActive }) => {
  const { t } = useTranslation("header");
  const activeBottom = isBottomActive ? ` ${styles.bottom_active}` : "";

  const activeSubscribe = isBottomActive
    ? ` ${styles.bottom__subscribe_active}`
    : "";

  const handleSubscriptionClick = (): void => {
    window.open("https://www.ivi.ru/profile/subscription");
  };

  return (
    <div className={styles.bottom + activeBottom} data-testid="widget-bottom">
      <div className={styles.bottom__fade} />
      <BottomInfo />
      <div className={styles.bottom__subscribe + activeSubscribe}>
        <CustomButton
          clickCallback={handleSubscriptionClick}
          className={styles.bottom__button}
          type="red"
          dataTestId="buy-button"
        >
          {t("headerWidget.widgetBuyButton")}
        </CustomButton>
        <p>{t("headerWidget.widgetHint")}</p>
      </div>
    </div>
  );
};

export default WidgetBottom;
