import { FC, useEffect, useState } from "react";
import styles from "./AuthModal.module.sass";
import ChatHeader from "/src/components/RegistrationModal/ChatHeader/ChatHeader";
import ChatDialogue from "/src/components/RegistrationModal/ChatDialogue/ChatDialogue";

interface RegistrationModalProps {
  closeCallback: () => void;
}

const AuthModal: FC<RegistrationModalProps> = ({ closeCallback }) => {
  const [progressBarWidth, setProgressBarWidth] = useState({ width: "10%" });

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      e.key === "Escape" && closeCallback();
    };
    document.addEventListener("keydown", keydownHandler);

    return () => document.removeEventListener("keydown", keydownHandler);
  }, [closeCallback]);

  return (
    <div className={styles.chat__container}>
      <ChatHeader
        closeCallback={closeCallback}
        progressBarWidth={progressBarWidth}
      />
      <ChatDialogue setProgressBarWidth={setProgressBarWidth} />
    </div>
  );
};

export default AuthModal;

