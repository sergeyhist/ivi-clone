import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./FooterCert.module.sass";

const FooterCert: FC = () => {
  const { t } = useTranslation("footer");

  return (
    <div className={styles.cert}>
      <Link className={styles.cert__link} href="https://www.ivi.ru/cert" target="_blank">
        {t("cert")}
      </Link>
    </div>
  );
};

export default FooterCert;
