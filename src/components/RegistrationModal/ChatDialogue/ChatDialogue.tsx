import {FC, FormEvent, useRef, useState} from "react";
import styles from './ChatDialogue.module.sass';
import CustomButton from "/src/UI/CustomButton/CustomButton";

const ChatDialogue:FC = ()=>{
    const [isInputActive,setIsInputActive] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputClick = ():void =>{
        setIsInputActive(true);
        if(inputRef.current)
            inputRef.current.focus();
    }

    const handleInputBlur = ():void =>{
        if(inputRef.current.value === '')
            setIsInputActive(false);
    }

    const handleSubmitForm = (e: FormEvent):void =>{
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmitForm} className={styles.chat__form}>
            <div className={styles.chat__message}>
                <h3 className={styles.chat__message__title}>Войдите или зарегестрируйтесь</h3>
                <p className={styles.chat__message__text}>чтобы пользоваться сервисом на любом устройстве</p>
            </div>
            <div>
                <div className={styles.chat__input__container}>
                    <div className={styles.chat__input__content} onClick={handleInputClick}>
                        <div className={`${styles.chat__input__placeholder} ${isInputActive ? styles.placeholder_active : ''}`}>Через email</div>
                        <div className={styles.chat__input_block}>
                            <div className={styles.chat__input__icon}></div>
                            <input ref={inputRef} className={`${styles.chat__input} ${isInputActive ? styles.input_active : ''}`} onBlur={handleInputBlur} type="email"/>
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