import { FC } from "react";
import styles from "./FooterTop.module.sass";
import FooterList from "../FooterList/FooterList";
import FooterButtons from "../FooterButtons/FooterButtons";
import FooterAsk from "../FooterAsk/FooterAsk";
import FooterWidget from "../FooterWidget/FooterWidget";
import { topLeftLinks, topRightLinks } from "./FooterTop.utils";
import FooterCert from "../FooterCert/FooterCert";
import { useTranslation } from "react-i18next";

const FooterTop: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.top}>
      <div>
        <span className={styles.top__title}>{t('footer.about.title')}</span>
        <nav className={styles.top__nav}>
          <FooterList items={topLeftLinks} />
        </nav>
      </div>
      <div>
        <span className={styles.top__title}>{t('footer.sections.title')}</span>
        <nav className={styles.top__nav}>
          <FooterList items={topRightLinks} />
          <FooterCert />
        </nav>
      </div>
      <div>
        <span className={styles.top__title}>{t("footer.support.title")}</span>
        <div className={styles.top__wrapper}>
          <p>{t("footer.support.text")}</p>
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
