import { FC } from "react";
import WidgetBanner from "../WidgetBanner/WidgetBanner";
import styles from "./WidgetBanners.module.sass";
import ILink from "/src/types/ILink";

interface WidgetBannersProps {
  isReverse?: boolean;
  links: Array<ILink>;
}

const WidgetBanners: FC<WidgetBannersProps> = ({ isReverse, links }) => {
  const reverseHandler = (type: string) =>
    isReverse ? ` ${styles[`banners__${type}_reverse`]}` : "";

  return (
    <div className={styles.banners}>
      <div className={styles.banners__primary + reverseHandler("primary")}>
        {links.map((link, i) => (
          <WidgetBanner key={i} link={link} />
        ))}
      </div>
      <div className={styles.banners__secondary + reverseHandler("secondary")}>
        {links.map((link, i) => (
          <WidgetBanner key={i} link={link} />
        ))}
      </div>
    </div>
  );
};

export default WidgetBanners;
