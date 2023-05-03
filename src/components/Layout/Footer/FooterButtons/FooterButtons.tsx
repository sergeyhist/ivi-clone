import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import styles from "./FooterButtons.module.sass";
import PhonesList from "./PhonesList/PhonesList";
import CustomButton from "/src/UI/CustomButton/CustomButton";

const FooterButtons: FC = () => {
  const { t } = useTranslation("footer");

  const [isListActive, setIsListActive] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const clickHandler = (e: MouseEvent): void => {
    !listRef.current?.contains(e.target as Node) &&
      !phoneRef.current?.contains(e.target as Node) &&
      setIsListActive(false);
  };

  const keydownHandler = (e: KeyboardEvent): void => {
    e.key === "Escape" && setIsListActive(false);
  };

  useEffect(() => {
    document.addEventListener("click", clickHandler);
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keydownHandler);
    };
  }, []);

  return (
    <div className={styles.btns}>
      <CustomButton
        style={{ width: "196px" }}
        clickCallback={() => {
          window.open("https://www.ivi.ru/profile");
        }}
      >
        {t("chat")}
      </CustomButton>
      <div className={styles.btns__wrapper}>
        <CustomButton
          type="icon"
          clickCallback={() => {
            window.open("mailto:support@ivi.ru");
          }}
        >
          <HiOutlineMail size={20} />
        </CustomButton>
        <div ref={phoneRef}>
          <CustomButton
            type="icon"
            clickCallback={() => {
              setIsListActive((curr) => !curr);
            }}
          >
            <BsTelephone size={16} />
          </CustomButton>
        </div>
      </div>
      <CSSTransition
        in={isListActive}
        nodeRef={listRef}
        unmountOnExit
        timeout={300}
        classNames={{
          enter: styles["list-enter"],
          enterActive: styles["list-enter-active"],
          exit: styles["list-exit"],
          exitActive: styles["list-exit-active"],
        }}
      >
        <div ref={listRef}>
          <PhonesList />
        </div>
      </CSSTransition>
    </div>
  );
};

export default FooterButtons;
