import { FC, useEffect, useMemo, useState } from "react";
import styles from "./SlideshowWidget.module.sass";
import { widgetInitHandler } from "./SlideshowWidget.utils";
import ILink from "/src/types/ILink";

interface SlideshowWidgetProps {
  items: ILink[];
  rowCount: 3 | 4;
  scale?: number;
  width?: string;
  isDark?: boolean;
}

const SlideshowWidget: FC<SlideshowWidgetProps> = ({
  items,
  rowCount,
  scale,
  width,
  isDark,
}) => {
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  const wrapperActive = isSlideshowActive
    ? ` ${styles.wrapper_active}`
    : "";

  const linksCount = useMemo(() => rowCount * 3, [rowCount]);

  const widgets = useMemo(
    () => widgetInitHandler(items, linksCount),
    [items, linksCount]
  );

  const widgetStyles = {
    scale: scale ? scale.toString() : "1",
    width: width ? width : "auto",
  };

  useEffect(() => {
    setIsSlideshowActive(true);
  }, [setIsSlideshowActive]);

  return (
    <div style={widgetStyles} className={styles.wrapper + wrapperActive}>
      <div className={styles.slideshow}>{widgets}</div>
      <div
        className={`${styles.fade} ${styles.fade__left} ${
          isDark ? styles.fade__left_alt : styles.fade__left_default
        }`}
      />
      <div
        className={`${styles.fade} ${styles.fade__right} ${
          isDark ? styles.fade__right_alt : styles.fade__right_default
        }`}
      />
    </div>
  );
};

export default SlideshowWidget;
