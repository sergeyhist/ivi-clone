import {FC} from "react";
import styles from "./ErrorMessage.module.sass";
import {RiErrorWarningLine} from "react-icons/ri";

const ErrorMessage: FC = () => {
    return (
        <div className={styles.chat__error}>
            <div className={styles.error__icon}>
                <RiErrorWarningLine/>
            </div>
            <div>
                <h3 className={styles.error__title}>Ошибка</h3>
                <div className={styles.error__text}>Неправильно указаны данные</div>
            </div>
        </div>
    )
}

export default ErrorMessage