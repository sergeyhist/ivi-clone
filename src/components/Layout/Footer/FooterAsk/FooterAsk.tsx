import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "next-i18next";
import styles from "./FooterAsk.module.sass";

const FooterAsk: FC = () => {
  const { t } = useTranslation("footer");

  return (
    <div className={styles.ask} data-testid="footer-ask">
      <Link
        target="_blank"
        className={styles.ask__link}
        href="https://ask.ivi.ru/?_gl=1*17d3i43*_ga*MTYyOTgwODIxOC4xNjgxMjEzNzAx*_ga_GETQ4387MJ*MTY4MTI5Mzg5My4zLjEuMTY4MTMwNDIxNS41NS4wLjA."
      >
        ask.ivi.ru
      </Link>
      <p className={styles.ask__text}>{t("ask")}</p>
    </div>
  );
};

export default FooterAsk;
