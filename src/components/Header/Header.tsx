import {FC, useEffect, useRef, useState} from "react";
import styles from "./Header.module.sass";
import Navigation from "/src/components/Header/Navigation/Navigation";
import Actions from "/src/components/Header/Actions/Actions";
import DropDown from "/src/components/Header/DropDown/DropDown";
import SearchModal from "/src/components/SearchModal/SearchModal";
import {CSSTransition} from "react-transition-group";

export type DropDownType = "movies" | "series" | "cartoons" | "tv" | "notification" | "profile" | "";


const Header: FC = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const [dropDownType, setDropDownType] = useState<DropDownType>("");

    const refDropDown = useRef<HTMLDivElement>(null);
    const navigationRef = useRef<HTMLDivElement>(null);
    const actionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        dropDownType ? setIsDropdownActive(true) : setIsDropdownActive(false);
    }, [dropDownType])

    return (
        <>
            {
                isSearchActive && <SearchModal closeCallback={() => setIsSearchActive(false)}/>
            }
            <header className={`${styles.header}  container`} onMouseOver={(e) => {
                (!navigationRef.current?.contains(e.target as Node) && !refDropDown.current?.contains(e.target as Node) && !actionRef.current?.contains(e.target as Node)) && setDropDownType('')
            }} onMouseLeave={()=>setDropDownType('')}>
                <div className={`${styles.header__content} ${dropDownType ? styles.header__content_active : ''}`}>
                    <div className={styles.header__navigation}>
                        <div className={styles.header__logo}>
                            <img src='/assets/images/iviLogo.svg' alt="ivi logo"/>
                        </div>
                        <div ref={navigationRef} className={styles.header__navigation_layout}>
                            <Navigation setDropDownType={setDropDownType}/>
                        </div>
                    </div>
                    <div ref={actionRef} className={styles.header__action_layout}>
                        <Actions setDropDownType={setDropDownType} setIsSearchActive={setIsSearchActive}/>
                    </div>
                </div>
                <CSSTransition classNames={{
                    enter: styles["header__dropdown-enter"],
                    enterActive: styles["header__dropdown-enter-active"],
                    exit: styles["header__dropdown-exit"],
                    exitActive: styles["header__dropdown-exit-active"],
                }} nodeRef={refDropDown} in={isDropdownActive} timeout={300} unmountOnExit>
                    <div ref={refDropDown} className={`${styles.header__dropdown}`}>
                        <DropDown dropDownType={dropDownType}/>
                    </div>
                </CSSTransition>
            </header>
        </>
    )
}

export default Header;
