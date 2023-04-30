import { FC } from "react";
import styles from "./ChatHeader.module.sass";
import ProgressBar from "/src/UI/ProgressBar/ProgressBar";

interface ChatHeaderProps {
  closeCallback: () => void;
  progressBarWidth: { width: number };
}

const ChatHeader: FC<ChatHeaderProps> = ({
  closeCallback,
  progressBarWidth,
}) => {
  return (
    <div className={styles.header__container}>
      <div className={styles.header__content}>
        <h2 className={styles.header__title}>Вход или регистрация</h2>
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

