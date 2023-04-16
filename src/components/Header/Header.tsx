import {FC, useRef, useState} from "react";
import styles from "./Header.module.sass";
import Navigation from "/src/components/Header/Navigation/Navigation";
import Actions from "/src/components/Header/Actions/Actions";
import {Genres} from "/src/types/genreType";
import DropDown from "/src/components/Header/DropDown/DropDown";
import SearchModal from "/src/components/SearchModal/SearchModal";

const Header: FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<Genres>("");
    const [isSearchActive,setIsSearchActive] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const [isNotificationSelected, setIsNotificationSelected] = useState(false);
    const [isProfileSelected, setIsProfileSelected] = useState(false);
    const [isTVSelected, setIsTVSelected] = useState(false);

    const refDropDown = useRef<HTMLDivElement>(null);

    const [dropDownType,setDropDownType] = useState()

    return (
        <>
            {
                isSearchActive && <SearchModal closeCallback={()=>setIsSearchActive(false)}/>
            }
            <header className={`${styles.header} container`}>
                <div className={`${styles.header__content} ${showDropDown ? styles.active : ''}`}>
                    <div className={styles.header__navigation}>
                        <div className={styles.header__logo}>
                            <img src='/assets/images/iviLogo.svg' alt="ivi logo"/>
                        </div>
                        <Navigation setIsTVSelected={setIsTVSelected} setIsProfileSelected={setIsProfileSelected}
                                    setShowDropDown={setShowDropDown} selectedGenre={selectedGenre}
                                    setSelectedGenre={setSelectedGenre}/>
                    </div>
                    <Actions setIsSearchActive={setIsSearchActive} setIsProfileSelected={setIsProfileSelected} setSelectedGenres={setSelectedGenre}
                             setShowDropDown={setShowDropDown} setIsNotificationSelected={setIsNotificationSelected}/>
                </div>
                <div className={`${styles.header__dropdown} ${showDropDown ? styles.header__dropdown_active : ''}`}
                     onMouseEnter={() => {
                         showDropDown && setShowDropDown(true)
                     }}
                     onMouseLeave={() => {
                         setShowDropDown(false);
                         setIsNotificationSelected(false)
                     }}
                >
                    <DropDown isTVSelected={isTVSelected} selectedGenre={selectedGenre}
                              isNotificationSelected={isNotificationSelected} isProfileSelected={isProfileSelected}/>
                </div>
            </header>
        </>
    )
}

export default Header;
