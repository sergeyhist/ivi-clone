import {FC} from "react";
import styles from './DropDown.module.sass';
import {Genres} from "/src/types/genreType";
import ProfileDropDown from "/src/components/Header/DropDown/ProfileDropDown/ProfileDropDown";
import NotificationDropDown from "/src/components/Header/DropDown/NotificationDropdown/NotificationDropDown";
import EntertainmentGenresDropDown
    from "/src/components/Header/DropDown/EntertainmentGenresDropDown/EntertainmentGenresDropDown";
import TvDropDown from "/src/components/Header/DropDown/TvDropDown/TvDropDown";

interface DropDownProps {
    selectedGenre: Genres,
    isProfileSelected: boolean,
    isNotificationSelected: boolean
    isTVSelected:boolean
}


const DropDown: FC<DropDownProps> = ({selectedGenre, isNotificationSelected, isProfileSelected,isTVSelected}) => {
    return (
        <div className={styles.dropdown__container}>
            {
                isNotificationSelected &&
                <NotificationDropDown/>
            }
            {
                selectedGenre &&
                <EntertainmentGenresDropDown selectedGenre={selectedGenre}/>
            }
            {
                isProfileSelected &&
                <ProfileDropDown/>
            }
            {
                isTVSelected &&
                <TvDropDown/>
            }
        </div>
    )
}

export default DropDown