import {FC, useState} from "react";
import styles from "./Header.module.sass";
import Navigation from "/src/components/Header/Navigation/Navigation";
import Actions from "/src/components/Header/Actions/Actions";
import {Genres} from "/src/types/genreType";
import DropDown from "/src/components/Header/DropDown/DropDown";

const Header: FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<Genres>("");
    const [showDropDown, setShowDropDown] = useState(false);
    const [isNotificationSelected, setIsNotificationSelected] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={`${styles.header__content} ${showDropDown ? styles.active : ''}`}>
                    <div className={styles.header__navigation}>
                        <div className={styles.header__logo}>
                            <img src='/assets/images/iviLogo.svg' alt="ivi logo"/>
                        </div>
                        <Navigation setShowDropDown={setShowDropDown} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
                    </div>
                    <Actions setShowDropDown={setShowDropDown} setIsNotificationSelected={setIsNotificationSelected}/>
                </div>
                <div className={`${styles.header__dropdown} ${showDropDown ? styles.header__dropdown_active : ''}`}
                     onMouseEnter={()=>setShowDropDown(true)}
                     onMouseLeave={()=>{setShowDropDown(false); setIsNotificationSelected(false)}}
                >
                    {
                      showDropDown && <DropDown selectedGenre={selectedGenre} isNotificationSelected={isNotificationSelected}/>
                    }
                </div>
            </header>
        </>
    )
}

export default Header;
