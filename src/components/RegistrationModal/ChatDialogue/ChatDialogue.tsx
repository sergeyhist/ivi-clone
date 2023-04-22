import {Dispatch, FC, FormEvent, SetStateAction, useEffect, useRef, useState} from "react";
import styles from './ChatDialogue.module.sass';
import {
    cssTransitionClassNames,
    validateEmail
} from "/src/components/RegistrationModal/ChatDialogue/ChatDoalogue.utils";
import PrivacyPolicy from "/src/components/RegistrationModal/ChatDialogue/PrivacyPolicy/PrivacyPolicy";
import AuthInput from "/src/components/RegistrationModal/ChatDialogue/AuthInput/AuthInput";
import {CSSTransition} from "react-transition-group";
import ErrorMessage from "/src/components/RegistrationModal/ChatDialogue/ErrorMessage/ErrorMessage";

interface ChatDialogueProps {
    setProgressBarWidth: Dispatch<SetStateAction<{ width: string }>>
}

const ChatDialogue: FC<ChatDialogueProps> = ({setProgressBarWidth}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isPasswordInputSelected, setIsPasswordInputSelected] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showForm, setShowFrom] = useState(false);
    const [isEmailInputSuccess, setIsEmailInputSuccess] = useState(false);
    const [isPasswordInputSuccess, setIsPasswordInputSuccess] = useState(false);

    const errorRef = useRef<HTMLDivElement>(null);
    const emailInputRef = useRef<HTMLDivElement>(null);
    const emailChangeRef = useRef<HTMLDivElement>(null);
    const passwordInputRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        setShowFrom(true);
    }, []);

    useEffect(() => {
        if (isEmailInputSuccess) {
            setProgressBarWidth({width: '50%'});
        }
    }, [isEmailInputSuccess,setProgressBarWidth]);

    const handleEmailSubmit = (e: MouseEvent): void => {
        e.preventDefault();
        setShowErrorMessage(!validateEmail(email));
        setIsEmailInputSuccess(validateEmail(email));
    }

    const handleEmailChangeClick = (): void => {
        setIsEmailInputSuccess(false);
        setProgressBarWidth({width: '20%'});
    }

    const handleSubmitForm = (e: FormEvent): void => {
        e.preventDefault();
        setIsEmailInputSuccess(true);
    }

    return (
        <CSSTransition classNames={cssTransitionClassNames} nodeRef={formRef} in={showForm} timeout={300} unmountOnExit>
            <form ref={formRef} noValidate={true} onSubmit={handleSubmitForm} className={styles.chat__form}>
                <div className={styles.chat__message}>
                    <h3 className={styles.chat__message__title}>Войдите или зарегестрируйтесь</h3>
                    {
                        !isEmailInputSuccess &&
                        <p className={styles.chat__message__text}>чтобы пользоваться сервисом на любом устройстве</p>
                    }
                </div>
                <CSSTransition classNames={cssTransitionClassNames} nodeRef={emailInputRef} in={!isEmailInputSuccess}
                               timeout={1}
                               unmountOnExit>
                    <div ref={emailInputRef}>
                        <AuthInput showErrorMessage={showErrorMessage}
                                   clickCallback={handleEmailSubmit}
                                   setIsValid={setShowErrorMessage}
                                   authData={email}
                                   setAuthData={setEmail}
                                   placeholderText="Через email"
                                   inputType="email"
                        />
                        <PrivacyPolicy/>
                    </div>
                </CSSTransition>

                <CSSTransition classNames={cssTransitionClassNames} nodeRef={emailChangeRef} in={isEmailInputSuccess}
                               timeout={300}
                               unmountOnExit>
                    <div ref={emailChangeRef} className={styles.email__container}>
                        <div className={styles.change__email} onClick={handleEmailChangeClick}>
                        </div>
                        <div className={styles.chat__message_sent}>
                            {email}
                        </div>
                    </div>
                </CSSTransition>

                {
                    isEmailInputSuccess &&
                    <>
                        <div className={styles.chat__message}>
                            <h3 className={styles.chat__message__title}>Войдите пароль чтобы войти</h3>
                        </div>
                        <AuthInput showErrorMessage={showErrorMessage}
                                   setIsValid={setShowErrorMessage}
                                   authData={password}
                                   setAuthData={setPassword}
                                   setIsPasswordInputSelected={setIsPasswordInputSelected}
                                   placeholderText="Введите пароль"
                                   inputType={showPassword ? "text" : "password"}
                        >
                            <div
                                className={`${styles.show__icon} ${isPasswordInputSelected ? "" : styles.show__icon_disabled} ${showPassword ? styles.password_show : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowPassword(prevState => !prevState)
                                }}
                            ></div>
                        </AuthInput>
                    </>
                }
                <CSSTransition classNames={cssTransitionClassNames} nodeRef={errorRef} in={showErrorMessage}
                               timeout={300}
                               unmountOnExit>
                    <div className={styles.error__container} ref={errorRef}>
                        <ErrorMessage/>
                    </div>
                </CSSTransition>
            </form>
        </CSSTransition>
    )
}

export default ChatDialogue