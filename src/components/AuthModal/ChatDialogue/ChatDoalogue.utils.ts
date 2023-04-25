import styles from "/src/components/AuthModal/ChatDialogue/ChatDialogue.module.sass";

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return emailRegex.test(email);
}

export const cssTransitionClassNames = {
    enter: styles["error-enter"],
    enterActive: styles["error-enter-active"],
    exit: styles["error-exit"],
    exitActive: styles["error-exit-active"],
};