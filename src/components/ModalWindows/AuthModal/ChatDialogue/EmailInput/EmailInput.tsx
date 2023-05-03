import { Dispatch, FC, SetStateAction, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import {
  cssTransitionClassNames,
  validateEmail,
} from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDoalogue.utils";
import ModalInput from "/src/UI/ModalInput/ModalInput";
import PrivacyPolicy from "/src/components/ModalWindows/AuthModal/ChatDialogue/PrivacyPolicy/PrivacyPolicy";

interface EmailInput {
  isEmailInputSuccess: boolean;
  setIsEmailInputSuccess: Dispatch<SetStateAction<boolean>>;
  showErrorMessage: boolean;
  setShowErrorMessage: Dispatch<SetStateAction<boolean>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

const EmailInput: FC<EmailInput> = ({
  isEmailInputSuccess,
  setIsEmailInputSuccess,
  showErrorMessage,
  setShowErrorMessage,
  email,
  setEmail,
}) => {
  const emailInputRef = useRef<HTMLDivElement>(null);
  const handleEmailSubmit = (): void => {
    setShowErrorMessage(!validateEmail(email));
    setIsEmailInputSuccess(validateEmail(email));
  };

  return (
    <CSSTransition
      classNames={cssTransitionClassNames}
      nodeRef={emailInputRef}
      in={!isEmailInputSuccess}
      timeout={1}
      unmountOnExit
    >
      <div ref={emailInputRef}>
        <ModalInput
          showErrorMessage={showErrorMessage}
          clickCallback={handleEmailSubmit}
          preventDefault={true}
          showIcon={true}
          setIsValid={setShowErrorMessage}
          authData={email}
          setAuthData={setEmail}
          placeholderText="Через email"
          buttonText="Продолжить"
          inputType="email"
        />
        <PrivacyPolicy />
      </div>
    </CSSTransition>
  );
};

export default EmailInput;
