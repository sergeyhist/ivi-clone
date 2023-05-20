import { FC, useEffect, useState } from "react";
import styles from "./AuthModal.module.sass";
import ChatHeader from "/src/components/ModalWindows/AuthModal/ChatHeader/ChatHeader";
import ChatDialogue from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDialogue";
import useOverflowHidden from "/src/hooks/useOverflowHidden";
import { useAppSelector } from "/src/hooks/redux";
import { iviSans, iviIcons, iconFont } from "/src/utils/fonts";

interface RegistrationModalProps {
  closeCallback: () => void;
}

const AuthModal: FC<RegistrationModalProps> = ({ closeCallback }) => {
  const [isEmailExist, setIsEmailExist] = useState<boolean>();
  const [progressBarWidth, setProgressBarWidth] = useState({ width: 10 });
  const { showAuthModal } = useAppSelector((state) => state.showModal);

  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent): void => {
      e.key === "Escape" && closeCallback();
    };
    document.addEventListener("keydown", keydownHandler);

    return () => document.removeEventListener("keydown", keydownHandler);
  }, [closeCallback]);

  useOverflowHidden(showAuthModal);

  return (
    <div
      className={`${styles.chat__container} ${iviSans.className} ${iviIcons.variable} ${iconFont.variable}`}
      data-testid="modal-container"
    >
      <ChatHeader
        isEmailExist={isEmailExist}
        closeCallback={closeCallback}
        progressBarWidth={progressBarWidth}
      />
      <ChatDialogue
        setIsEmailExist={setIsEmailExist}
        isEmailExist={isEmailExist}
        setProgressBarWidth={setProgressBarWidth}
      />
    </div>
  );
};

export default AuthModal;
