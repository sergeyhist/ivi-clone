import {FC} from "react";
import styles from "./ChatMessage.module.sass";

interface ChatMessageProps{
  titleText: string;
  subtitleText?: string;
}

const ChatMessage:FC<ChatMessageProps> = ({titleText,subtitleText})=>{
  return(
    <div className={styles.container}>
      <h3 className={styles.title}>
        {titleText}
      </h3>
      {subtitleText && (
        <p className={styles.text}>
          {subtitleText}
        </p>
      )}
    </div>
  )
}

export default ChatMessage;
