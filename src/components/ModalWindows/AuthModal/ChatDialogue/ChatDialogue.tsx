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
import ModalInput from "/src/UI/ModalInput/ModalInput";
import { cssTransitionClassNames } from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDoalogue.utils";
import ErrorMessage from "/src/components/ModalWindows/AuthModal/ChatDialogue/ErrorMessage/ErrorMessage";
import EmailInput from "/src/components/ModalWindows/AuthModal/ChatDialogue/EmailInput/EmailInput";
import {createUser} from "/src/api/userApi";
import { useTranslation } from "next-i18next";
import ChatMessage from "/src/components/ModalWindows/AuthModal/ChatMessage/ChatMessage";

interface ChatDialogueProps {
  setProgressBarWidth: Dispatch<SetStateAction<{ width: number }>>;
}

const ChatDialogue: FC<ChatDialogueProps> = ({ setProgressBarWidth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showForm, setShowFrom] = useState(false);
  const [isEmailInputSuccess, setIsEmailInputSuccess] = useState(false);
  const { t } = useTranslation("registration");

  const emailChangeRef = useRef<HTMLDivElement>(null);
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
    setProgressBarWidth({ width: 10 });
  };

  const handleSubmitForm = (e: FormEvent): void => {
    e.preventDefault();
    if (email && password) {
      createUser({ email: email, password: password });
    } else setIsEmailInputSuccess(true);
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
        onSubmit={handleSubmitForm}
        className={styles.chat__form}
      >
        <ChatMessage
          titleText={t("hintMessage.title")}
          subtitleText={
            (!isEmailInputSuccess && t("hintMessage.subtitle")) || undefined
          }
        />
        <EmailInput
          email={email}
          isEmailInputSuccess={isEmailInputSuccess}
          setEmail={setEmail}
          setIsEmailInputSuccess={setIsEmailInputSuccess}
          setShowErrorMessage={setShowErrorMessage}
          showErrorMessage={showErrorMessage}
        />

        <CSSTransition
          classNames={cssTransitionClassNames}
          nodeRef={emailChangeRef}
          in={isEmailInputSuccess}
          timeout={300}
          unmountOnExit
        >
          <div ref={emailChangeRef} className={styles.email__container}>
            <div
              className={styles.change__email}
              onClick={handleEmailChangeClick}
            ></div>
            <div className={styles.chat__message_sent}>{email}</div>
          </div>
        </CSSTransition>

        {isEmailInputSuccess && (
          <>
            <ChatMessage titleText={t("passwordMessage")}/>
            <ModalInput
              showErrorMessage={showErrorMessage}
              setIsValid={setShowErrorMessage}
              authData={password}
              showIcon={true}
              setAuthData={setPassword}
              placeholderText={t("passwordPlaceholder")}
              buttonText={t("submit")}
              inputType="password"
            />
          </>
        )}
        <ErrorMessage showErrorMessage={showErrorMessage} />
      </form>
    </CSSTransition>
  );
};

export default ChatDialogue;
