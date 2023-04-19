import {Dispatch, FC, SetStateAction} from "react";
import {AiOutlineBell} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import {BiUser} from 'react-icons/bi';
import styles from './Actions.module.sass';
import CustomButton from "/src/UI/CustomButton/CustomButton";
import {DropDownType} from "/src/components/Header/Header.utils";

interface ActionsProps {
    setDropDownType: Dispatch<SetStateAction<DropDownType>>,
    setIsSearchActive: Dispatch<SetStateAction<boolean>>,
}

const Actions: FC<ActionsProps> = ({setDropDownType, setIsSearchActive}) => {
    return (
        <div className={styles.actions__container}>
            <CustomButton type='purple'>
                Оплатить подписку
            </CustomButton>
            <div className={styles.actions__search} onClick={()=>{setIsSearchActive(true)}}>
                <div className={styles.search__icon}><BsSearch/></div>
                <div>Поиск</div>
            </div>
            <a href="https://www.ivi.ru/profile/pull_notifications" target="_blank">
                <div className={styles.actions__notifications} onMouseEnter={() => setDropDownType('notification')}>
                    <AiOutlineBell/>
                </div>
            </a>
            <a href="https://www.ivi.ru/profile" target="_blank">
                <div className={styles.actions__profile} onMouseEnter={() => setDropDownType('profile')}>
                    <BiUser/>
                </div>
            </a>
        </div>
    )
}

export default Actions