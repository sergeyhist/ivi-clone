import { FC } from "react";
import styles from "./ChatHeader.module.sass";
import ProgressBar from "/src/UI/ProgressBar/ProgressBar";
import { useTranslation } from "next-i18next";
import { useAppSelector } from "/src/hooks/redux";

interface ChatHeaderProps {
  closeCallback: () => void;
  progressBarWidth: { width: number };
  isEmailExist: boolean | undefined;
}

const ChatHeader: FC<ChatHeaderProps> = ({
  closeCallback,
  progressBarWidth,
  isEmailExist,
}) => {
  const { t } = useTranslation("registration");
  const userEmail = useAppSelector((state) => state.auth.userEmail);
  const getHeaderTitle = (): string => {
    if (isEmailExist === undefined) {
      return t("title");
    } else if (isEmailExist) {
      return t("titleLogin");
    } else {
      return t("titleRegistration");
    }
  };

  return (
    <div className={styles.header__container} data-testid="chat-header">
      <div className={styles.header__content}>
        <div className={styles.header__text}>
          <h2 className={styles.header__title}>{getHeaderTitle()}</h2>
          <span>{userEmail}</span>
        </div>
        <button
          onClick={closeCallback}
          className={styles.header__button}
          data-testid="close-auth-btn"
        ></button>
      </div>
      <ProgressBar
        value={progressBarWidth.width}
        className={styles.progress__bar}
      />
    </div>
  );
};

export default ChatHeader;

