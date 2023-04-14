import Link from "next/link";
import { FC } from "react";
import styles from "./FooterLink.module.sass";
import ILink from "/src/types/ILink";

const FooterLink: FC<ILink> = ({ text, url, target }) => {
  return (
    <Link target={target} className={styles.link} href={url}>
      {text}
    </Link>
  );
};

export default FooterLink;
