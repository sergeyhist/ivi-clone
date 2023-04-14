import {FC} from "react";
import LinkList from "/src/components/Header/DropDown/LinkList/LinkList";
import styles from './DropDown.module.sass';
import {Genres} from "/src/types/genreType";
import Tabs from "/src/components/Header/DropDown/Tabs/Tabs";
import {MdOutlineNotificationsActive} from 'react-icons/Md';
import ProfileDropDown from "/src/components/Header/DropDown/ProfileDropDown/ProfileDropDown";

interface DropDownProps {
    selectedGenre: Genres,
    isProfileSelected: boolean,
    isNotificationSelected: boolean
}


const DropDown: FC<DropDownProps> = ({selectedGenre, isNotificationSelected, isProfileSelected}) => {
    return (
        <div className={styles.dropdown__container}>
            {
                isNotificationSelected && (
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
            {
                selectedGenre && (
                    <>
                        <LinkList selectedGenre={selectedGenre}/>
                        <div>
                            <Tabs selectedGenre={selectedGenre}/>
                        </div>
                    </>
                )
            }
            {
                isProfileSelected &&
                (
                    <ProfileDropDown/>
                )
            }
        </div>
    )
}

export default DropDown