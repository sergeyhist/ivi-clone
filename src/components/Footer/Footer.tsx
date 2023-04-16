import { FC, useState } from "react";
import FooterTop from "./FooterTop/FooterTop";
import FooterBottom from "./FooterBottom/FooterBottom";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import SearchModal from "../SearchModal/SearchModal";
import CustomButton from "/src/UI/CustomButton/CustomButton";

const Footer: FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  return (
    <>
      <footer className="container">
        <FooterTop />
        <FooterBottom />
        <FooterCopyright />
        <CustomButton
          clickCallback={() => {
            setIsSearchActive(true);
          }}
        >
          Search
        </CustomButton>
      </footer>
      {isSearchActive && (
        <SearchModal
          closeCallback={() => {
            setIsSearchActive(false);
          }}
        />
      )}
    </>
  );
};

export default Footer;
