import Link from "next/link";
import { FC } from "react";
import styles from "./FooterLink.module.sass";

export interface FooterLinkProps {
  text: string;
  link: string;
}

const FooterLink: FC<FooterLinkProps> = ({ text, link }) => {
  return (
    <Link className={styles.link} href={link}>
      {text}
    </Link>
  );
};

export default FooterLink;
