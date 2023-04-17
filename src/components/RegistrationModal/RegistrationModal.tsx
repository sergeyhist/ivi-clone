import {FC} from "react";
import styles from './RegistrationModal.module.sass';
import ChatHeader from "/src/components/RegistrationModal/ChatHeader/ChatHeader";
import ChatDialogue from "/src/components/RegistrationModal/ChatDialogue/ChatDialogue";

const RegistrationModal:FC =()=>{
    return(
        <div className={styles.chat__container}>
            <ChatHeader/>
            <ChatDialogue/>
        </div>
    )
}

export default RegistrationModal