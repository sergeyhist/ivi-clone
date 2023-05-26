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

  const handleLinkClick = (social: string): void =>{
    if(social === "google")
      window.open(`${String(process.env.SERVER_HOST)}/google/login`,"_self");
    else
      window.open(`${String(process.env.SERVER_HOST)}/vk/login`,"_self");
  }

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
      <div className={styles.container} ref={emailInputRef} data-testid="email-input-container">
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
          isFocused={true}
          inputType="email"
          dataTestId="email-input"
        />
        <div className={styles.socials}>
            <CustomButton className={styles.socials__btn} preventDefault={true} type="icon" clickCallback={()=>{handleLinkClick("google")}} dataTestId="google-link">
              <div className={styles.icon__container}>
                <BsGoogle/>
                <p className={styles.text}>{t("googleButton")}</p>
              </div>
            </CustomButton>
            <CustomButton className={styles.socials__btn} preventDefault={true} type="icon" clickCallback={()=>{handleLinkClick("vk")}} dataTestId="vk-link">
              <div className={styles.icon__container}>
                <FaVk/>
                <p className={styles.text}>{t("vkButton")}</p>
              </div>
            </CustomButton>
        </div>
        <PrivacyPolicy />
      </div>
    </CSSTransition>
  );
};

export default EmailInput;
