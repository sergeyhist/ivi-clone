import {FC} from "react";
import styles from "/src/components/Header/DropDown/DropDown.module.sass";
import {MdOutlineNotificationsActive} from "react-icons/md";
import {useTranslation} from "react-i18next";

const NotificationDropDown: FC = () => {
  const {t} = useTranslation();

  return (
    <div className={styles.dropdown__notification}>
      <MdOutlineNotificationsActive className={styles.dropdown__notification_icon}/>
      <div className={styles.dropdown__notification_text}>
        {t("header.notification")}
      </div>
    </div>
  )
}

export default NotificationDropDown;
