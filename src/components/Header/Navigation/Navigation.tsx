import {Dispatch, FC, SetStateAction} from "react";
import styles from './Navigation.module.sass';
import {DropDownType} from "/src/components/Header/Header";

interface NavigationProps{
    setDropDownType: Dispatch<SetStateAction<DropDownType>>,
}

const Navigation:FC<NavigationProps> = ({setDropDownType})=>{
    return(
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>Мой Иви</li>
                <li className={styles.nav__item}>Что нового</li>
                <li className={styles.nav__item} onMouseEnter={()=>setDropDownType('movies')}>Фильмы</li>
                <li className={styles.nav__item} onMouseEnter={()=>setDropDownType('series')} >Сериалы</li>
                <li className={styles.nav__item} onMouseEnter={()=>setDropDownType('cartoons')}>Мультфильмы</li>
                <li className={styles.nav__item} onMouseEnter={()=>setDropDownType('tv')} >TV+</li>
            </ul>
        </nav>
    )
}

export default Navigation