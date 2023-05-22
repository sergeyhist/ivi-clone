import { FC } from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import { useAppSelector } from "/src/hooks/redux";
import styles from "./Footer.module.sass";
import Container from "/src/UI/Container/Container";

const Footer: FC = () => {
  const windowSize = useAppSelector((state) => state.windowSize);

  return (
    <footer className={styles.footer}>
      <Container>
        {windowSize.width > 1159 && <FooterTop />}
        {windowSize.width > 1159 && <FooterBottom />}
        <FooterCopyright />
      </Container>
    </footer>
  );
};

export default Footer;
