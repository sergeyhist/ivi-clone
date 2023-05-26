import { Dispatch, FC, SetStateAction, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { cssTransitionClassNames } from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDialogue.utils";
import ChatMessage from "/src/components/ModalWindows/AuthModal/ChatMessage/ChatMessage";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import { useTranslation } from "next-i18next";
import styles from "./PasswordInput.module.sass";
import {notify} from "/src/utils/defaultToast";

interface PasswordInputProps {
  isEmailInputSuccess: boolean;
  isEmailExist: boolean | undefined;
  showErrorMessage: boolean;
  setShowErrorMessage: Dispatch<SetStateAction<boolean>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
}

const PasswordInput: FC<PasswordInputProps> = ({
  isEmailInputSuccess,
  isEmailExist,
  showErrorMessage,
  setShowErrorMessage,
  password,
  setPassword,
}) => {
  const { t } = useTranslation("registration");
  const passwordInputRef = useRef<HTMLDivElement>(null);
  const isPasswordValid = password.length < 4 || password.length > 16;

  const handlePasswordSubmit = (): void =>{
    if(isPasswordValid){
      notify(t("passwordErrorMessage"), "pass");
    }
  }

  return (
    <CSSTransition
      classNames={cssTransitionClassNames}
      nodeRef={passwordInputRef}
      in={isEmailInputSuccess}
      timeout={300}
      unmountOnExit
    >
      <div className={styles.container} ref={passwordInputRef} data-testid="password-input-container">
        <ChatMessage
          titleText={
            isEmailExist ? t("passwordMessage") : t("passwordHint.title")
          }
          subtitleText={
            !isEmailExist ? String(t("passwordHint.title")) : undefined
          }
        />
        <ModalInput
          showErrorMessage={showErrorMessage}
          setIsValid={setShowErrorMessage}
          authData={password}
          showIcon={true}
          setAuthData={setPassword}
          clickCallback={handlePasswordSubmit}
          preventDefault={isPasswordValid}
          placeholderText={
            isEmailExist
              ? t("passwordPlaceholder")
              : t("passwordPlaceholderCreate")
          }
          buttonText={t("submit")}
          inputType="password"
          isFocused={true}
          dataTestId="password-input"
        />
      </div>
    </CSSTransition>
  );
};

export default PasswordInput;
