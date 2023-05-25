import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./ChatDialogue.module.sass";
import { CSSTransition } from "react-transition-group";
import {
  cssTransitionClassNames,
  cssTransitionEmailClassNames,
} from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDialogue.utils";
import ErrorMessage from "/src/components/ModalWindows/AuthModal/ChatDialogue/ErrorMessage/ErrorMessage";
import EmailInput from "/src/components/ModalWindows/AuthModal/ChatDialogue/EmailInput/EmailInput";
import { createUser, getUserByEmail, login } from "/src/api/user";
import { useTranslation } from "next-i18next";
import ChatMessage from "/src/components/ModalWindows/AuthModal/ChatMessage/ChatMessage";
import { useAppDispatch } from "/src/hooks/redux";
import { setAuth, setRole } from "/src/store/slices/authSlice";
import { setShowAuthModal } from "/src/store/slices/modalsSlice";
import { notify } from "/src/utils/defaultToast";
import PasswordInput from "/src/components/ModalWindows/AuthModal/ChatDialogue/PasswordInput/PasswordInput";
import { setAuthData } from "/src/utils/localStorage";

interface ChatDialogueProps {
  setProgressBarWidth: Dispatch<SetStateAction<{ width: number }>>;
  setIsEmailExist: Dispatch<SetStateAction<boolean | undefined>>;
  isEmailExist: boolean | undefined;
}

const ChatDialogue: FC<ChatDialogueProps> = ({
  setProgressBarWidth,
  setIsEmailExist,
  isEmailExist,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showForm, setShowFrom] = useState(false);
  const [isEmailInputSuccess, setIsEmailInputSuccess] = useState(false);
  const { t } = useTranslation("registration");
  const dispatch = useAppDispatch();

  const emailChangeRef = useRef<HTMLDivElement>(null);
  const emailInputRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setShowFrom(true);
  }, []);

  useEffect(() => {
    if (isEmailInputSuccess) {
      setProgressBarWidth({ width: 50 });
    }
  }, [isEmailInputSuccess, setProgressBarWidth]);

  const handleEmailChangeClick = (): void => {
    setIsEmailInputSuccess(false);
    dispatch(setAuth({ isLogged: false, userEmail: "" }));
    setIsEmailExist(undefined);
    setProgressBarWidth({ width: 10 });
  };

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (email && password) {
      if (isEmailExist) {
        handleLogin(email, password);
      } else {
        handleCreateUser(email, password);
      }
      dispatch(setAuth({ isLogged: true, userEmail: email }));
      dispatch(setShowAuthModal(false));
      notify(t("toastMessage"), "login");
    } else setIsEmailInputSuccess(true);
  };

  const handleLogin = async (
    email: string,
    password: string
  ): Promise<void> => {
    const loginResponse = await login(email, password);
    const userData = await getUserByEmail(email);

    if (userData?.roles) {
      dispatch(
        setRole(userData.roles[0]?.value ? userData.roles[0].value : "")
      );
    }

    setAuthData(email, loginResponse?.accessToken);
  };

  const handleCreateUser = async (
    email: string,
    password: string
  ): Promise<void> => {
    await createUser(email, password);
    await handleLogin(email, password);
  };

  return (
    <CSSTransition
      classNames={cssTransitionClassNames}
      nodeRef={formRef}
      in={showForm}
      timeout={300}
      unmountOnExit
    >
      <form
        ref={formRef}
        noValidate={true}
        onSubmit={handleFormSubmit}
        className={styles.chat__form}
        data-testid="form"
      >
        <ChatMessage
          titleText={t("hintMessage.title")}
          subtitleText={
            (!isEmailInputSuccess && t("hintMessage.subtitle")) || undefined
          }
        />
        <CSSTransition
          classNames={cssTransitionEmailClassNames}
          nodeRef={emailInputRef}
          in={!isEmailInputSuccess}
          timeout={300}
          unmountOnExit
        >
          <div className={styles.email} ref={emailInputRef}>
            <EmailInput
              email={email}
              isEmailInputSuccess={isEmailInputSuccess}
              setEmail={setEmail}
              setIsEmailInputSuccess={setIsEmailInputSuccess}
              setIsEmailExist={setIsEmailExist}
              setShowErrorMessage={setShowErrorMessage}
              showErrorMessage={showErrorMessage}
            />
          </div>
        </CSSTransition>
        <CSSTransition
          classNames={cssTransitionClassNames}
          nodeRef={emailChangeRef}
          in={isEmailInputSuccess}
          timeout={5000}
          unmountOnExit
        >
          <div ref={emailChangeRef} className={styles.email__container}>
            <div>
              <div
                className={styles.change__email}
                onClick={handleEmailChangeClick}
                data-testid="email-change"
              ></div>
            </div>
            <div className={styles.chat__message_sent}>{email}</div>
          </div>
        </CSSTransition>
        <PasswordInput
          password={password}
          setPassword={setPassword}
          showErrorMessage={showErrorMessage}
          setShowErrorMessage={setShowErrorMessage}
          isEmailInputSuccess={isEmailInputSuccess}
          isEmailExist={isEmailExist}
        />
        <ErrorMessage showErrorMessage={showErrorMessage} />
      </form>
    </CSSTransition>
  );
};

export default ChatDialogue;
