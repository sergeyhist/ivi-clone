import { FC, useRef } from "react";
import styles from "./ErrorMessage.module.sass";
import { RiErrorWarningLine } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import { cssTransitionClassNames } from "/src/components/ModalWindows/AuthModal/ChatDialogue/ChatDoalogue.utils";

interface ErrorMessageProps {
  showErrorMessage: boolean;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ showErrorMessage }) => {
  const errorRef = useRef<HTMLDivElement>(null);

  return (
    <CSSTransition
      classNames={cssTransitionClassNames}
      nodeRef={errorRef}
      in={showErrorMessage}
      timeout={300}
      unmountOnExit
    >
      <div className={styles.container} ref={errorRef}>
        <div className={styles.chat__error}>
          <div className={styles.error__icon}>
            <RiErrorWarningLine />
          </div>
          <div>
            <h3 className={styles.error__title}>Ошибка</h3>
            <div className={styles.error__text}>Неправильно указаны данные</div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ErrorMessage;
