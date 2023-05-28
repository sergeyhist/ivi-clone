import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./WidgetBanner.module.sass";
import ILink from "/src/types/ILink";

interface WidgetBannerProps {
  link: ILink;
}

const WidgetBanner: FC<WidgetBannerProps> = ({ link }) => {
  return (
    <Link
      className={styles.banner + " unselectable"}
      target={link.target}
      href={link.url}
    >
      <Image
        width={256}
        height={144}
        className={styles.banner__image}
        src={link.content as string}
        alt="Small banner"
        placeholder="blur"
        blurDataURL="/images/placeholder.svg"
      />
    </Link>
  );
};

export default WidgetBanner;
