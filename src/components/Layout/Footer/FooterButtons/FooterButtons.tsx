import { FC, useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { CSSTransition } from "react-transition-group";
import styles from "./FooterButtons.module.sass";
import PhonesList from "./PhonesList/PhonesList";
import { useAppDispatch } from "/src/hooks/redux";
import { setLocale } from "/src/store/slices/localeSlice";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import { useRouter } from "next/router";

const FooterButtons: FC = () => {
  const { t } = useTranslation("footer");
  const dispatch = useAppDispatch();
  const { locale, locales, push, asPath } = useRouter();

  const [isListActive, setIsListActive] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const clickHandler = (e: MouseEvent): void => {
    !listRef.current?.contains(e.target as Node) &&
      !phoneRef.current?.contains(e.target as Node) &&
      setIsListActive(false);
  };

  const localeClick = (locale: string): void => {
    push(asPath, undefined, { locale: locale });
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

        {locales?.map((locale) => (
          <CustomButton
            key={locale}
            type="icon"
            clickCallback={() => {
              localeClick(locale);
            }}
          >
            {locale}
          </CustomButton>
        ))}
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
