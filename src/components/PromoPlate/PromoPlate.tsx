import {FC} from "react";
import Link from "next/link";
import styles from "./PromoPlate.module.sass";

const PromoPlate: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <Link
          className={`${styles.link} ${styles.link_subscribe}`}
          href="https://www.ivi.ru/subscribe?redirect_url=%2F"
          target="__blank"
        >
          <img className={styles.link__icon} src="/images/thunder.svg" alt="" />
          30 дней подписки за 1 ₽
        </Link>

        <Link className={`${styles.link}`} href="/">
          <img className={`${styles.link__icon} ${styles.link__icon_present}`} src="/images/present.svg" alt="" />{" "}
          Активировать сертификат
        </Link>
      </div>
    </section>
  );
};

export default PromoPlate;
