import {FC} from "react";
import styles from "./ChatHeader.module.sass";

const ChatHeader:FC = ()=>{
    return(
        <div className={styles.header__container}>
            <div className={styles.header__content}>
                <h2 className={styles.header__title}>Вход или регистрация</h2>
                <button className={styles.header__button}></button>
            </div>
            <div className={styles.header_progress}>
                <div className={styles.progress__bar}></div>
            </div>
        </div>
    )
}

export default ChatHeader