import { FC, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import styles from "./FooterButtons.module.sass";
import PhonesList from "./PhonesList/PhonesList";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import useCloseEvents from "/src/hooks/useCloseEvents";

const FooterButtons: FC = () => {
  const { t } = useTranslation("footer");

  const [isListActive, setIsListActive] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useCloseEvents([listRef, phoneRef], () => setIsListActive(false));

  return (
    <div data-testid="footer-buttons" className={styles.btns}>
      <CustomButton
        dataTestId="chat"
        style={{ width: "196px" }}
        clickCallback={() => {
          window.open("https://www.ivi.ru/profile");
        }}
      >
        {t("chat")}
      </CustomButton>
      <div className={styles.btns__wrapper}>
        <CustomButton
          dataTestId="support"
          type="icon"
          clickCallback={() => {
            window.open("mailto:support@ivi.ru");
          }}
        >
          <HiOutlineMail size={20} />
        </CustomButton>
        <div ref={phoneRef}>
          <CustomButton
            dataTestId="phones"
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
        <div data-testid="phones-dropdown" ref={listRef}>
          <PhonesList />
        </div>
      </CSSTransition>
    </div>
  );
};

export default FooterButtons;
