import { useEffect, useRef, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import styles from "./FooterButtons.module.sass";
import PhonesList from "./PhonesList/PhonesList";
import CustomButton from "/src/UI/CustomButton/CustomButton";

const FooterButtons = () => {
  const [isListActive, setIsListActive] = useState(false);

  const firstRender = useRef(true);
  const listRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstRender.current === true) {
      firstRender.current = false;
      document.addEventListener("click", (e) => {
        !listRef.current?.contains(e.target as Node) &&
          !phoneRef.current?.contains(e.target as Node) &&
          setIsListActive(false);
      });
      document.addEventListener("keydown", (e) => {
        e.key === "Escape" && setIsListActive(false);
      });
    }
  });

  return (
    <div className={styles.btns}>
      <CustomButton
        width="196px"
        clickCallback={() => {
          window.open("https://www.ivi.ru/profile");
        }}
      >
        Написать в чате
      </CustomButton>
      <div className={styles.btns__wrapper}>
        <CustomButton
          width="40px"
          padding="0"
          clickCallback={() => {
            window.open("support@ivi.ru");
          }}
        >
          <HiOutlineMail size={20} />
        </CustomButton>
        <div ref={phoneRef}>
          <CustomButton
            width="40px"
            padding="0"
            clickCallback={() => {
              setIsListActive((curr) => !curr);
            }}
          >
            <BsTelephone size={16} />
          </CustomButton>
        </div>
      </div>
      <div ref={listRef}>
        <PhonesList isActive={isListActive} />
      </div>
    </div>
  );
};

export default FooterButtons;
