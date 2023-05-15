import { FC } from "react";
import styles from "/src/components/Layout/Header/DropDown/DropDown.module.sass";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useTranslation } from "next-i18next";

const NotificationDropDown: FC = () => {
  const { t } = useTranslation("header");

  return (
    <div className={styles.dropdown__notification} data-testid="notification-dropdown">
      <MdOutlineNotificationsActive
        className={styles.dropdown__notification_icon}
      />
      <div className={styles.dropdown__notification_text}>
        {t("notification")}
      </div>
    </div>
  );
};

export default NotificationDropDown;
