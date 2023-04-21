import { FC } from "react";
import styles from "./ChatHeader.module.sass";

interface ChatHeaderProps {
  closeCallback: () => void;
  progressBarWidth: { width: string };
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
      <div className={styles.header_progress}>
        <div className={styles.progress__bar} style={progressBarWidth}></div>
      </div>
    </div>
  );
};

export default ChatHeader;

