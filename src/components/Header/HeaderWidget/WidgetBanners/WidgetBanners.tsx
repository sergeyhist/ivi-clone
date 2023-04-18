import { FC, ReactNode } from "react";
import WidgetBanner from "../WidgetBanner/WidgetBanner";
import styles from "./WidgetBanners.module.sass";
import ILink from "/src/types/ILink";

interface WidgetBannersProps {
  isReverse?: boolean;
  links: Array<ILink>;
}

const WidgetBanners: FC<WidgetBannersProps> = ({ isReverse, links }) => {
  const reverseClassName = isReverse
    ? ` ${styles.banners__banner_reverse}`
    : "";

  const createBanners = () => {
    const banners: Array<ReactNode> = [];

    [0, 1].forEach((i) => {
      banners.push(
        <div key={i} className={styles.banners__banner + reverseClassName}>
          {links.map((link, i) => (
            <WidgetBanner key={i} link={link} />
          ))}
        </div>
      );
    });

    return banners;
  };

  return (
    <div className={styles.banners}>
      {createBanners().map((banner) => banner)}
    </div>
  );
};

export default WidgetBanners;
