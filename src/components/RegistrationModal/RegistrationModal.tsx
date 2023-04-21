import { FC, useEffect, useState } from "react";
import styles from "./RegistrationModal.module.sass";
import ChatHeader from "/src/components/RegistrationModal/ChatHeader/ChatHeader";
import ChatDialogue from "/src/components/RegistrationModal/ChatDialogue/ChatDialogue";

interface RegistrationModalProps {
  closeCallback: () => void;
}

const RegistrationModal: FC<RegistrationModalProps> = ({ closeCallback }) => {
  const [progressBarWidth, setProgressBarWidth] = useState({ width: "10%" });

  const keydownHandler = (e: KeyboardEvent) => {
    e.key === "Escape" && closeCallback();
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);

    return () => document.removeEventListener("keydown", keydownHandler);
  }, []);

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

export default RegistrationModal;

