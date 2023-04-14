import {Dispatch, FC, SetStateAction} from "react";
import styles from './Navigation.module.sass';
import {Genres} from "/src/types/genreType";

interface NavigationProps{
    setSelectedGenre: Dispatch<SetStateAction<Genres>>,
    setShowDropDown: Dispatch<SetStateAction<boolean>>,
    setIsProfileSelected: Dispatch<SetStateAction<boolean>>,
    setIsTVSelected: Dispatch<SetStateAction<boolean>>
}

const Navigation:FC<NavigationProps> = ({setSelectedGenre,setShowDropDown,setIsProfileSelected,setIsTVSelected})=>{

    const handleGenreHover = (genre:Genres):void =>{
        setSelectedGenre(genre);
    }

    const handleMouseEnter = ():void =>{
        setIsProfileSelected(false);
        setShowDropDown(true);
    }

    return(
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__item}>Мой Иви</li>
                <li className={styles.nav__item}>Что нового</li>
                <li className={styles.nav__item} onMouseEnter={()=>{handleGenreHover("movie"); handleMouseEnter()}}>Фильмы</li>
                <li className={styles.nav__item} onMouseEnter={()=>{handleGenreHover("series"); handleMouseEnter()}} >Сериалы</li>
                <li className={styles.nav__item} onMouseEnter={()=>{handleGenreHover("cartoons"); handleMouseEnter()}}>Мультфильмы</li>
                <li className={styles.nav__item} onMouseEnter={()=>setIsTVSelected(true)} >TV+</li>
            </ul>
        </nav>
    )
}

export default Navigation