import Link from "next/link";
import { FC } from "react";
import {useTranslation} from "react-i18next";
import styles from "./FooterLink.module.sass";
import ILink from "/src/types/ILink";

const FooterLink: FC<ILink> = ({ content, url, target }) => {
  const { t } = useTranslation();

  return (
    <Link target={target} className={styles.link} href={url}>
      {t(content as string)}
    </Link>
  );
};

export default FooterLink;
