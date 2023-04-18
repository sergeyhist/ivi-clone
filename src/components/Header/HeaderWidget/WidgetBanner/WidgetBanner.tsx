import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./WidgetBanner.module.sass";
import ILink from "/src/types/ILink";

interface WidgetBannerProps {
  link: ILink;
}

const WidgetBanner: FC<WidgetBannerProps> = ({link}) => {
  return (
    <Link
      className={styles.banner}
      target={link.target}
      href={link.url}
    >
      <Image
        width={128}
        height={72}
        className={styles.banner__image}
        src={link.text as string}
        alt="Small banner"
      ></Image>
    </Link>
  );
};

export default WidgetBanner;
