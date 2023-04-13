import {FC} from "react";
import LinkList from "/src/components/Header/DropDown/LinkList/LinkList";
import styles from './DropDown.module.sass';
import {Genres} from "/src/types/genreType";
import Tabs from "/src/components/Header/DropDown/Tabs/Tabs";

interface DropDownProps {
    selectedGenre: Genres,
    isNotificationSelected: boolean
}

const DropDown: FC<DropDownProps> = ({selectedGenre,isNotificationSelected}) => {
    return (
        <div className={styles.genres__container}>
            {
                isNotificationSelected ? (
                    <>
                        Notification
                    </>
                ) :
                    <>
                        <LinkList selectedGenre={selectedGenre}/>
                        <div>
                            <Tabs selectedGenre={selectedGenre}/>
                        </div>
                    </>
            }

        </div>
    )
}

export default DropDown