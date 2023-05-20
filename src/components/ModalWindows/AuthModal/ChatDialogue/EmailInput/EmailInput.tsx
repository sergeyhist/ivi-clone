import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import {
  cssTransitionEmailClassNames,
  validateEmail,
} from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDialogue.utils";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import PrivacyPolicy from "/src/components/ModalWindows/AuthModal/ChatDialogue/PrivacyPolicy/PrivacyPolicy";
import { useTranslation } from "next-i18next";
import styles from "./EmailInput.module.sass";
import { getUserByEmail } from "/src/api/user";
import { useAppDispatch } from "/src/hooks/redux";
import { setAuth } from "/src/store/slices/authSlice";
import Link from "next/link";
import CustomButton from "/src/UI/CustomButton/CustomButton";
import {BsGoogle} from "react-icons/bs";
import {FaVk} from "react-icons/fa";

interface EmailInput {
  isEmailInputSuccess: boolean;
  setIsEmailInputSuccess: Dispatch<SetStateAction<boolean>>;
  setIsEmailExist: Dispatch<SetStateAction<boolean | undefined>>;
  showErrorMessage: boolean;
  setShowErrorMessage: Dispatch<SetStateAction<boolean>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

const EmailInput: FC<EmailInput> = ({
  isEmailInputSuccess,
  setIsEmailInputSuccess,
  setIsEmailExist,
  showErrorMessage,
  setShowErrorMessage,
  email,
  setEmail,
}) => {
  const { t } = useTranslation("registration");
  const dispatch = useAppDispatch();
  const emailInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isEmailInputSuccess)
      getUserByEmail(email).then((res) => {
        setIsEmailExist(res !== undefined);
        dispatch(setAuth({ isLogged: false, userEmail: email }));
      });
  }, [dispatch, email, isEmailInputSuccess, setIsEmailExist]);

  const handleEmailSubmit = (): void => {
    setShowErrorMessage(!validateEmail(email));
    setIsEmailInputSuccess(validateEmail(email));
  };

  return (
    <CSSTransition
      classNames={cssTransitionEmailClassNames}
      nodeRef={emailInputRef}
      in={!isEmailInputSuccess}
      timeout={1}
      unmountOnExit
    >
      <div className={styles.container} ref={emailInputRef}>
        <ModalInput
          showErrorMessage={showErrorMessage}
          clickCallback={handleEmailSubmit}
          preventDefault={true}
          showIcon={true}
          setIsValid={setShowErrorMessage}
          authData={email}
          setAuthData={setEmail}
          placeholderText={t("emailPlaceholder")}
          buttonText={t("submit")}
          inputType="email"
          dataTestId="email-input"
        />
        <div className={styles.socials}>
          <Link className={styles.socials__link} href={`${String(process.env.SERVER_HOST)}/google/login`}>
            <CustomButton className={styles.socials__btn} type="icon">
              <div className={styles.icon__container}>
                <BsGoogle/>
                <p>{t("googleButton")}</p>
              </div>
            </CustomButton>
          </Link>
          <Link className={styles.socials__link} href={`${String(process.env.SERVER_HOST)}/vk/login`}>
            <CustomButton className={styles.socials__btn} type="icon">
              <div className={styles.icon__container}>
                <FaVk/>
                <p>{t("vkButton")}</p>
              </div>
            </CustomButton>
          </Link>
        </div>
        <PrivacyPolicy />
      </div>
    </CSSTransition>
  );
};

export default EmailInput;
