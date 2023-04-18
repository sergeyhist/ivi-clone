import { FC } from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import {useAppSelector} from "/src/hooks/redux";
import {RootState} from "/src/store";
import styles from './Footer.module.sass';

const Footer: FC = () => {
  const windowSize = useAppSelector((state: RootState) => state.windowSize);

  return (
    <footer className={`${styles.footer} container`}>
      {windowSize.width > 1159 && <FooterTop />}
      {windowSize.width > 1159 && <FooterBottom />}
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
