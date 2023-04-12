import {FC, useState} from "react";
import styles from "./Header.module.sass";
import Navigation from "/src/components/Header/Navigation/Navigation";
import Actions from "/src/components/Header/Actions/Actions";
import {Genres} from "/src/types/genreType";
import DropDown from "/src/components/Header/DropDown/DropDown";

const Header: FC = () => {
    const [selectedGenre, setSelectedGenre] = useState<Genres>("");
    const [showDropDown, setShowDropDown] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.header__navigation}>
                    <div className={styles.header__logo}>
                        <img src='/assets/images/iviLogo.svg' alt="ivi logo"/>
                    </div>
                    <Navigation setShowDropDown={setShowDropDown} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre}/>
                </div>
                <Actions/>
            </header>
            {
                showDropDown && (
                    <div onMouseEnter={()=>setShowDropDown(true)} onMouseLeave={()=>setShowDropDown(false)}>
                        <DropDown selectedGenre={selectedGenre}/>
                    </div>
                )
            }
        </>
    )
}

export default Header;
