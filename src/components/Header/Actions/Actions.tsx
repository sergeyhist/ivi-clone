import {Dispatch, FC, SetStateAction} from "react";
import {AiOutlineBell} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import {BiUser} from 'react-icons/bi';
import styles from './Actions.module.sass';
import CustomButton from "/src/UI/CustomButton/CustomButton";
import {DropDownType} from "/src/components/Header/Header";

interface ActionsProps {
    setDropDownType: Dispatch<SetStateAction<DropDownType>>,
    setIsSearchActive: Dispatch<SetStateAction<boolean>>,
}

const Actions: FC<ActionsProps> = ({setDropDownType, setIsSearchActive}) => {
    const handleSearchClick = (): void => {
        setIsSearchActive(true);
    }

    return (
        <div className={styles.actions__container}>
            <CustomButton type='purple' height='25px' padding='7px 11px'>
                Оплатить подписку
            </CustomButton>
            <div className={styles.actions__search} onClick={handleSearchClick}>
                <div className={styles.search__icon}><BsSearch/></div>
                <div>Поиск</div>
            </div>
            <div className={styles.actions__notifications} onMouseEnter={() => setDropDownType('notification')}>
                <AiOutlineBell/>
            </div>
            <div className={styles.actions__profile} onMouseEnter={() => setDropDownType('profile')}>
                <BiUser/>
            </div>
        </div>
    )
}

export default Actions