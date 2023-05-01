import styles from "./FooterWidget.module.sass";
import { CiBullhorn } from "react-icons/ci";
import { BsSlashLg } from "react-icons/bs";
import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "next-i18next";

const FooterWidget: FC = () => {
  const { t } = useTranslation("footer");

  return (
    <Link
      target="_blank"
      href="https://www.ivi.ru/subscribe?redirect_url=%2F"
      className={styles.widget}
    >
      <div className={styles.widget__icon}>
        <div className={styles.widget__svg}>
          <CiBullhorn size={56} />
          <BsSlashLg size={48} className={styles.widget__slash} />
        </div>
      </div>
      <p className={styles.widget__text}>{t("widget")}</p>
    </Link>
  );
};

export default FooterWidget;
