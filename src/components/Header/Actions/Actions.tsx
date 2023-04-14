import {Dispatch, FC, SetStateAction} from "react";
import {AiOutlineBell} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import {BiUser} from 'react-icons/bi';
import styles from './Actions.module.sass';
import CustomButton from "/src/UI/CustomButton/CustomButton";
import {Genres} from "/src/types/genreType";

interface ActionsProps{
    setIsNotificationSelected: Dispatch<SetStateAction<boolean>>,
    setSelectedGenres: Dispatch<SetStateAction<Genres>>,
    setShowDropDown: Dispatch<SetStateAction<boolean>>,
    setIsProfileSelected: Dispatch<SetStateAction<boolean>>,
}

const Actions: FC<ActionsProps> = ({setIsNotificationSelected,setShowDropDown,setSelectedGenres,setIsProfileSelected}) => {

    const resetStateForNotification = ():void =>{
        setSelectedGenres('');
        setIsProfileSelected(false);
    }

    const resetStateForProfile = ():void =>{
        setSelectedGenres('');
        setIsNotificationSelected(false);
    }

    const handleNotificationEnter = ():void =>{
        setIsNotificationSelected(true);
        resetStateForNotification();
        setShowDropDown(true);
    }

    const handleNotificationLeave = ():void =>{
        setIsNotificationSelected(false);
        setShowDropDown(false);
    }

    const handleProfileEnter = ():void =>{
        setIsProfileSelected(true);
        resetStateForProfile();
        setShowDropDown(true);
    }

    return (
        <div className={styles.actions__container}>
            <CustomButton clickCallback={() => {
            }} type='purple' height='25px' padding='7px 11px'>
                Оплатить подписку
            </CustomButton>
            <div className={styles.actions__search}>
                <div className={styles.search__icon}><BsSearch/></div>
                <div>Поиск</div>
            </div>
            <div className={styles.actions__notifications} onMouseEnter={handleNotificationEnter} onMouseLeave={handleNotificationLeave}>
                <AiOutlineBell/>
            </div>
            <div className={styles.actions__profile} onMouseEnter={handleProfileEnter}>
                <BiUser/>
            </div>
        </div>
    )
}

export default Actions