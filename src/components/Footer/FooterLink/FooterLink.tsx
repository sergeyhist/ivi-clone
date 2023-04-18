import Link from "next/link";
import { FC } from "react";
import styles from "./FooterLink.module.sass";
import ILink from "/src/types/ILink";

const FooterLink: FC<ILink> = ({ content, url, target }) => {
  return (
    <Link target={target} className={styles.link} href={url}>
      {content}
    </Link>
  );
};

export default FooterLink;
