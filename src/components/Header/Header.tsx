import {FC} from "react";
import styles from "./Header.module.sass";
import Navigation from "/src/components/Header/Navigation/Navigation";
import Actions from "/src/components/Header/Actions/Actions";

const Header:FC = () => {
  return (
    <header className={styles.header}>
        <div className={styles.header__navigation}>
            <div className={styles.header__logo}>
                <img src='/assets/images/iviLogo.svg' alt="ivi logo"/>
            </div>
            <Navigation/>
        </div>
        <Actions/>
    </header>
  )
}

export default Header;
