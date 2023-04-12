import {FC} from "react";
import styles from './Navigation.module.sass';

const Navigation:FC = ()=>{
    return(
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>Мой Иви</li>
                <li className={styles.nav__item}>Что нового</li>
                <li className={styles.nav__item}>Фильмы</li>
                <li className={styles.nav__item}>Сериалы</li>
                <li className={styles.nav__item}>Мультфильмы</li>
                <li className={styles.nav__item}>TV+</li>
            </ul>
        </nav>
    )
}

export default Navigation