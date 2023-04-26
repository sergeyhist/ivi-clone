import { FC } from "react";
import WidgetBanner from "../WidgetBanner/WidgetBanner";
import styles from "./WidgetBanners.module.sass";
import ILink from "/src/types/ILink";

interface WidgetBannersProps {
  isReverse?: boolean;
  links: ILink[];
}

const WidgetBanners: FC<WidgetBannersProps> = ({ isReverse, links }) => {
  const reverseClassName = isReverse
    ? ` ${styles.banners__banner_reverse}`
    : "";

  return (
    <div className={styles.banners}>
      {[0, 1].map((i) => (
        <div key={i} className={styles.banners__banner + reverseClassName}>
          {links.map((link, i) => (
            <WidgetBanner key={i} link={link} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default WidgetBanners;
