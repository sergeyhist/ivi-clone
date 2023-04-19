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
    const [showPassword,setShowPassword] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showForm, setShowFrom] = useState(false);
    const [isEmailInputSuccess, setIsEmailInputSuccess] = useState(false);

    const errorRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        setShowFrom(true);
    }, []);

    useEffect(() => {
        if (isEmailInputSuccess) {
            setProgressBarWidth({width: '50%'});
        }
    }, [isEmailInputSuccess]);

    const handleEmailSubmit = (e: MouseEvent) => {
        e.preventDefault();
        setShowErrorMessage(!validateEmail(email));
        setIsEmailInputSuccess(validateEmail(email));
    }

    const handleSubmitForm = (e: FormEvent): void => {
        e.preventDefault();
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
                {
                    !isEmailInputSuccess ?
                        <div>
                            <AuthInput showErrorMessage={showErrorMessage}
                                       clickCallback={handleEmailSubmit}
                                       setIsValid={setShowErrorMessage}
                                       authData={email}
                                       setAuthData={setEmail}
                                       placeholderText="Через email"
                                       inputType="email"
                            />
                            <PrivacyPolicy/>
                        </div> :
                        <div className={styles.email__container}>
                            <div className={styles.change__email}>

                            </div>
                            <div className={styles.chat__message_sended}>
                                {email}
                            </div>
                        </div>
                }
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
                                   placeholderText="Введите пароль"
                                   inputType="password"
                        >
                            <div className={`${styles.show__icon} ${showPassword ? styles.password_show : ''}`}
                                 onClick={(e)=>{ e.preventDefault(); setShowPassword(prevState => !prevState)}}
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