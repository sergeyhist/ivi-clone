import styles from "./ChatDialogue.module.sass";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  return emailRegex.test(email);
};

export const cssTransitionClassNames = {
  enter: styles["error-enter"],
  enterActive: styles["error-enter-active"],
  exit: styles["error-exit"],
  exitActive: styles["error-exit-active"],
};

export const cssTransitionEmailClassNames = {
  enter: styles["email-enter"],
  enterActive: styles["email-enter-active"],
  exit: styles["email-exit"],
  exitActive: styles["email-exit-active"],
};