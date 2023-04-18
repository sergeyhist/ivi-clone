import { FC, useEffect, useRef, useState } from "react";
import styles from "./HeaderWidget.module.sass";
import { bottomLinks, middleLinks, topLinks } from "./HeaderWidget.utils";
import WidgetBanners from "./WidgetBanners/WidgetBanners";
import WidgetBottom from "./WidgetBottom/WidgetBottom";

const HeaderWidget: FC = () => {
  const [isBottomActive, setIsBottomActive] = useState(false);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  const slideshowRef = useRef<HTMLDivElement>(null);
  const slideshowActive = isSlideshowActive
    ? ` ${styles.widget__slideshow_active}`
    : "";

  useEffect(() => {
    setIsSlideshowActive(true);
  }, []);

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
      <div
        ref={slideshowRef}
        className={styles.widget__slideshow + slideshowActive}
      >
        <WidgetBanners links={topLinks} />
        <WidgetBanners isReverse={true} links={middleLinks} />
        <WidgetBanners links={bottomLinks} />
      </div>
      <div className={`${styles.widget__fade} ${styles.widget__fade_left}`} />
      <div className={`${styles.widget__fade} ${styles.widget__fade_right}`} />
      <WidgetBottom isBottomActive={isBottomActive} />
    </div>
  );
};

export default HeaderWidget;
