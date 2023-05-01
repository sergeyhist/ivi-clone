import { FC } from "react";
import styles from "./FooterTop.module.sass";
import FooterList from "../FooterList/FooterList";
import FooterButtons from "../FooterButtons/FooterButtons";
import FooterAsk from "../FooterAsk/FooterAsk";
import FooterWidget from "../FooterWidget/FooterWidget";
import { topLeftLinks, topRightLinks } from "./FooterTop.utils";
import FooterCert from "../FooterCert/FooterCert";
import { useTranslation } from "next-i18next";

const FooterTop: FC = () => {
  const { t } = useTranslation("footer");

  return (
    <div className={styles.top}>
      <div>
        <span className={styles.top__title}>{t("about.title")}</span>
        <nav className={styles.top__nav}>
          <FooterList items={topLeftLinks} />
        </nav>
      </div>
      <div>
        <span className={styles.top__title}>{t("sections.title")}</span>
        <nav className={styles.top__nav}>
          <FooterList items={topRightLinks} />
          <FooterCert />
        </nav>
      </div>
      <div>
        <span className={styles.top__title}>{t("support.title")}</span>
        <div className={styles.top__wrapper}>
          <p>{t("support.text")}</p>
          <FooterButtons />
          <FooterAsk />
        </div>
      </div>
      <div>
        <FooterWidget />
      </div>
    </div>
  );
};

export default FooterTop;
