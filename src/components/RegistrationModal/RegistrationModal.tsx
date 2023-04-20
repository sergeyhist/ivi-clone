import {FC, useState} from "react";
import styles from './RegistrationModal.module.sass';
import ChatHeader from "/src/components/RegistrationModal/ChatHeader/ChatHeader";
import ChatDialogue from "/src/components/RegistrationModal/ChatDialogue/ChatDialogue";

const RegistrationModal: FC = () => {
    const [progressBarWidth, setProgressBarWidth] = useState({width: "10%"});

    return (
        <div className={styles.chat__container}>
            <ChatHeader progressBarWidth={progressBarWidth}/>
            <ChatDialogue setProgressBarWidth={setProgressBarWidth}/>
        </div>
    )
}

export default RegistrationModal