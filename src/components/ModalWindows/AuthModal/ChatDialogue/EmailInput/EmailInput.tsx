import {Dispatch, FC, SetStateAction, useEffect, useRef} from "react";
import { CSSTransition } from "react-transition-group";
import {
  cssTransitionEmailClassNames,
  validateEmail,
} from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDoalogue.utils";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import PrivacyPolicy from "/src/components/ModalWindows/AuthModal/ChatDialogue/PrivacyPolicy/PrivacyPolicy";
import { useTranslation } from "next-i18next";
import styles from "./EmailInput.module.sass";
import { getUserByEmail } from "/src/api/userApi";
import GoogleLoginButton from "/src/components/ModalWindows/AuthModal/GoogleLoginButton/GoogleLoginButton";
import VkLoginButton from "/src/components/ModalWindows/AuthModal/VkLoginButton/VkLoginButton";
import {useAppDispatch} from "/src/hooks/redux";
import {setAuth} from "/src/store/slices/authSlice";

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

  useEffect(()=>{
    if(isEmailInputSuccess)
      getUserByEmail(email).then((res) => {
        setIsEmailExist(res !== undefined);
        dispatch(setAuth({isLogged:false,userEmail:email}))
      });
  },[dispatch, email, isEmailInputSuccess, setIsEmailExist])

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
        />
        <div className={styles.social_auth}>
          <GoogleLoginButton/>
          <VkLoginButton/>
        </div>
        <PrivacyPolicy />
      </div>
    </CSSTransition>
  );
};

export default EmailInput;
