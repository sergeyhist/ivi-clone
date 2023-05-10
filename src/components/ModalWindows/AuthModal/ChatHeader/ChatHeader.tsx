import { FC } from "react";
import styles from "./ChatHeader.module.sass";
import ProgressBar from "/src/UI/ProgressBar/ProgressBar";
import { useTranslation } from "next-i18next";

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
  const headerTitle = isEmailExist === undefined ? t("title") : isEmailExist ? t("titleLogin") : t("titleRegistration");

  return (
    <div className={styles.header__container}>
      <div className={styles.header__content}>
        <h2 className={styles.header__title}>{headerTitle}</h2>
        <button
          onClick={closeCallback}
          className={styles.header__button}
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

