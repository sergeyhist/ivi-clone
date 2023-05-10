import { FC, useEffect, useState } from "react";
import styles from "./AuthModal.module.sass";
import ChatHeader from "/src/components/ModalWindows/AuthModal/ChatHeader/ChatHeader";
import ChatDialogue from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDialogue";
import useOverflowHidden from "/src/hooks/useOverflowHidden";
import VkLoginButton from "/src/components/ModalWindows/AuthModal/VkLoginButton/VkLoginButton";
import GoogleLoginButton from "/src/components/ModalWindows/AuthModal/GoogleLoginButton/GoogleLoginButton";

interface RegistrationModalProps {
  closeCallback: () => void;
}

const AuthModal: FC<RegistrationModalProps> = ({ closeCallback }) => {
  const [isEmailExist,setIsEmailExist] = useState<boolean>();
  const [progressBarWidth, setProgressBarWidth] = useState({ width: 10 });

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent): void => {
      e.key === "Escape" && closeCallback();
    };
    document.addEventListener("keydown", keydownHandler);

    return () => document.removeEventListener("keydown", keydownHandler);
  }, [closeCallback]);

  useOverflowHidden();

  return (
    <div className={styles.chat__container}>
      <ChatHeader
        isEmailExist={isEmailExist}
        closeCallback={closeCallback}
        progressBarWidth={progressBarWidth}
      />
      <ChatDialogue setIsEmailExist={setIsEmailExist} isEmailExist={isEmailExist} setProgressBarWidth={setProgressBarWidth} />
      <div className={styles.social_auth}>
        <GoogleLoginButton/>
        <VkLoginButton/>
      </div>
    </div>
  );
};

export default AuthModal;

