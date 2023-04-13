import { FC } from "react";
import FooterTop from "./FooterTop/FooterTop";
import styles from "./Footer.module.sass";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

const Footer: FC = () => {
  return (
    <footer className={styles.footer + ' container'}>
      <FooterTop />
      <FooterBottom />
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
