import {
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import styles from "./SlideshowWidget.module.sass";
import { widgetInitHandler } from "./SlideshowWidget.utils";
import ILink from "/src/types/ILink";

interface SlideshowWidgetProps {
  items: ILink[];
  rowCount: 3 | 4;
  scale?: number;
  width?: string;
}

const SlideshowWidget: FC<SlideshowWidgetProps> = ({
  items,
  rowCount,
  scale,
  width,
}) => {
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  const slideshowActive = isSlideshowActive
    ? ` ${styles.slideshow_active}`
    : "";

  const linksCount = useMemo(() => rowCount * 3, [rowCount]);

  const widgets = useMemo(
    () => widgetInitHandler(items, linksCount),
    [items, linksCount]
  );

  const widgetStyles = {
    scale: scale ? scale.toString() : "1",
    width: width ? width : "fit-content",
  };

  useEffect(() => {
    setIsSlideshowActive(true);
  }, [setIsSlideshowActive]);

  return (
    <div style={widgetStyles} className={styles.slideshow + slideshowActive}>
      {widgets}
      <div
        className={`${styles.slideshow__fade} ${styles.slideshow__fade_left}`}
      />
      <div
        className={`${styles.slideshow__fade} ${styles.slideshow__fade_right}`}
      />
    </div>
  );
};

export default SlideshowWidget;
