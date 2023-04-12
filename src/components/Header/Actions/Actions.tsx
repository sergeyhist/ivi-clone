import {FC} from "react";
import {AiOutlineBell} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import {BiUser} from 'react-icons/bi';
import styles from './Actions.module.sass';
import CustomButton from "/src/UI/customButton/CustomButton";

const Actions:FC = ()=>{
    return(
        <div className={styles.actions__container}>
            <CustomButton clickCallback={()=>{}} children='Оплатить подписку' type='purple'/>
            <div className={styles.actions__search}>
                <div className={styles.search__icon}><BsSearch/></div>
                <div>Поиск</div>
            </div>
            <div className={styles.actions__notifications}>
                <AiOutlineBell/>
            </div>
            <div className={styles.actions__profile}>
                <BiUser/>
            </div>
        </div>
    )
}

export default Actions