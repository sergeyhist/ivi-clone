import {ChangeEvent, Dispatch, FC, ReactNode, SetStateAction, useRef, useState} from "react";
import styles from "./AuthInput.module.sass";
import CustomButton from "/src/UI/CustomButton/CustomButton";

interface EmailInputProps {
    authData: string,
    children?: ReactNode,
    setAuthData: Dispatch<SetStateAction<string>>,
    setIsValid: Dispatch<SetStateAction<boolean>>,
    setIsPasswordInputSelected?: Dispatch<SetStateAction<boolean>>,
    inputType: "email" | "password" | "text",
    placeholderText: string,
    showErrorMessage: boolean,
    clickCallback?: () => void,
}

const AuthInput: FC<EmailInputProps> = ({
                                            authData,
                                            children,
                                            setAuthData,
                                            setIsValid,
                                            setIsPasswordInputSelected,
                                            inputType,
                                            placeholderText,
                                            showErrorMessage,
                                            clickCallback
                                        }) => {
    const [isInputActive, setIsInputActive] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;

        value !== '' ? setIsButtonDisabled(false) : setIsButtonDisabled(true);
        setAuthData(value);
        setIsValid(false);
    }

    const handleInputClick = (): void => {
        setIsInputActive(true);
        if (inputRef.current)
            inputRef.current.focus();
    }

    const handleInputBlur = (): void => {
        if (inputRef.current.value === '')
            setIsInputActive(false);
    }

    return (
        <div className={styles.chat__input__container}>
            <div className={`${styles.chat__input__content} ${showErrorMessage ? styles.chat__input__error : ''}`}
                 onClick={handleInputClick}>
                <div className={`${styles.chat__input__placeholder} ${isInputActive ? styles.placeholder_active : ''}`}>
                    {placeholderText}
                </div>
                <div className={styles.chat__input_block}>
                    <div className={styles.chat__input__icon}></div>
                    <input type={inputType}
                           ref={inputRef}
                           value={authData}
                           className={`${styles.chat__input} ${isInputActive ? styles.input_active : ''}`}
                           onBlur={handleInputBlur}
                           onChange={handleInputChange}
                    />
                    {children}
                </div>
            </div>
            <CustomButton clickCallback={clickCallback}
                          className={`${styles.chat__button} ${isButtonDisabled ? styles.button_disabled : ''}`}
                          type="red">
                Продолжить
            </CustomButton>
        </div>
    )
}

export default AuthInput