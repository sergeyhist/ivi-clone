import {FC} from "react";
import styles from "/src/components/Header/DropDown/DropDown.module.sass";
import {MdOutlineNotificationsActive} from "react-icons/md";

const NotificationDropDown:FC = ()=>{
    return(
        <div className={styles.dropdown__notification}>
            {
                <MdOutlineNotificationsActive className={styles.dropdown__notification_icon}/>
            }
            <div className={styles.dropdown__notification_text}>
                Здесь появляются только важные сообщения
            </div>
        </div>
    )
}

export default NotificationDropDown