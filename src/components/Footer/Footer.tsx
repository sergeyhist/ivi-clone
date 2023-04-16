import { FC } from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import SearchModal from "../SearchModal/SearchModal";

const Footer: FC = () => {
  return (
    <>
      <footer className="container">
        <FooterTop />
        <FooterBottom />
        <FooterCopyright />
      </footer>
      <SearchModal closeCallback={() => {}} />
    </>
  );
};

export default Footer;
