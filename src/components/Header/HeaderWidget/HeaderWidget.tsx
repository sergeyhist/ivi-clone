import { FC, useEffect, useRef, useState } from "react";
import styles from "./HeaderWidget.module.sass";
import { bottomLinks, middleLinks, topLinks } from "./HeaderWidget.utils";
import WidgetBanners from "./WidgetBanners/WidgetBanners";
import CustomButton from "/src/UI/CustomButton/CustomButton";

const HeaderWidget: FC = () => {
  const [isBottomActive, setIsBottomActive] = useState(false);
  const slideshowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    slideshowRef.current?.classList.add(styles.widget__slideshow_active);
  }, [slideshowRef]);

  const activeBottom = isBottomActive ? ` ${styles.widget__bottom_active}` : "";

  const activeSubscribe = isBottomActive
    ? ` ${styles.widget__subscribe_active}`
    : "";

  return (
    <div
      onMouseOver={() => {
        setIsBottomActive(true);
      }}
      onMouseLeave={() => {
        setIsBottomActive(false);
      }}
      className={styles.widget}
    >
      <div ref={slideshowRef} className={styles.widget__slideshow}>
        <WidgetBanners links={topLinks} />
        <WidgetBanners isReverse={true} links={middleLinks} />
        <WidgetBanners links={bottomLinks} />
      </div>
      <div
        className={`${styles.widget__border} ${styles.widget__border__left}`}
      />
      <div
        className={`${styles.widget__border} ${styles.widget__border__right}`}
      />
      <div className={styles.widget__bottom + activeBottom}>
        <div className={styles.widget__fade} />
        <div className={styles.widget__info}>
          <div className={styles.widget__logo} />
          <span className={styles.widget__title}>Подписка Иви</span>
          <span className={styles.widget__description}>От 199 ₽ за месяц</span>
        </div>
        <div className={styles.widget__subscribe + activeSubscribe}>
          <CustomButton
            clickCallback={() => {
              window.open("https://www.ivi.ru/profile/subscription");
            }}
            style={{ width: "100%", height: "32px" }}
            type="red"
          >
            Подключить
          </CustomButton>
          <p>Отключить можно в любой момент</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderWidget;
