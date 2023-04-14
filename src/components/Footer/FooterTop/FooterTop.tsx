import { FC } from "react";
import styles from "./FooterTop.module.sass";
import FooterList from "../FooterList/FooterList";
import FooterButtons from "../FooterButtons/FooterButtons";
import FooterAsk from "../FooterAsk/FooterAsk";
import FooterWidget from "../FooterWidget/FooterWidget";
import { topLeftLinks, topRightLinks } from "./FooterTop.utils";
import FooterCert from "../FooterCert/FooterCert";

const FooterTop: FC = () => {
  return (
    <div className={styles.top}>
      <div>
        <span className={styles.top__title}>О нас</span>
        <nav className={styles.top__nav}>
          <FooterList items={topLeftLinks} />
        </nav>
      </div>
      <div>
        <span className={styles.top__title}>Разделы</span>
        <nav className={styles.top__nav}>
          <FooterList items={topRightLinks} />
          <FooterCert />
        </nav>
      </div>
      <div>
        <span className={styles.top__title}>Служба поддержки</span>
        <div className={styles.top__wrapper}>
          <p>
            Мы всегда готовы вам помочь.
            <br /> Наши операторы онлайн 24/7
          </p>
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
