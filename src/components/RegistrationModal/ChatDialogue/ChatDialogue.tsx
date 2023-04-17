import {FC} from "react";
import styles from './ChatDialogue.module.sass';
import CustomButton from "/src/UI/CustomButton/CustomButton";

const ChatDialogue:FC = ()=>{
    return(
        <form className={styles.chat__form}>
            <div className={styles.chat__message}>
                <h3 className={styles.chat__message__title}>Войдите или зарегестрируйтесь</h3>
                <p className={styles.chat__message__text}>чтобы пользоваться сервисом на любом устройстве</p>
            </div>
            <div>
                <div className={styles.chat__input__container}>
                    <div className={styles.chat__input__content}>
                        <div className={styles.chat__input__placeholder}>Через email</div>
                        <div className={styles.chat__input_block}>
                            <div className={styles.chat__input__icon}></div>
                            <input className={styles.chat__input} type="text"/>
                        </div>
                    </div>
                    <CustomButton className={styles.chat__button} type="red">
                        Продолжить
                    </CustomButton>
                </div>
                <div className={styles.privacy_policy}>
                    <p>
                        Нажимая «Продолжить», я соглашаюсь
                        <br/>
                        {`с `}<a className={styles.privacy_policy__link} href="https://www.ivi.ru/info/confidential" target="_blank">Политикой конфиденциальности</a>
                        <br/>
                        {`и `}<a className={styles.privacy_policy__link} href="https://www.ivi.ru/info/agreement" target="_blank">Пользовательским соглашением</a>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default ChatDialogue