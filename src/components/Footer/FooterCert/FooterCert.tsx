import Link from "next/link";
import { FC } from "react";
import styles from "./FooterCert.module.sass";

const FooterCert: FC = () => {
  return (
    <div className={styles.cert}>
      <Link className={styles.cert__link} href="https://www.ivi.ru/cert">
        Активация сертификата
      </Link>
    </div>
  );
};

export default FooterCert;
