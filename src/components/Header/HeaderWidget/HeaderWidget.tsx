import { FC, useState } from "react";
import styles from "./HeaderWidget.module.sass";
import WidgetBottom from "./WidgetBottom/WidgetBottom";
import SlideshowWidget from "/src/UI/SlideshowWidget/SlideshowWidget";
import { slideshowItems } from "/src/utils/slideshowItems";

const HeaderWidget: FC = () => {
  const [isBottomActive, setIsBottomActive] = useState(false);

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
      <SlideshowWidget items={slideshowItems} rowCount={3} />
      <WidgetBottom isBottomActive={isBottomActive} />
    </div>
  );
};

export default HeaderWidget;
