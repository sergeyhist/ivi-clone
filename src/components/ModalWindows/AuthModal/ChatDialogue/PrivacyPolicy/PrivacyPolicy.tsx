import {FC} from "react";
import styles from "./PrivacyPolicy.module.sass";

const PrivacyPolicy: FC = () => {
  return (
    <div className={styles.privacy_policy}>
      <p>
        Нажимая «Продолжить», я соглашаюсь
        <br/>
        {`с `}<a className={styles.privacy_policy__link} href="https://www.ivi.ru/info/confidential"
                 target="_blank">Политикой конфиденциальности</a>
        <br/>
        {`и `}<a className={styles.privacy_policy__link} href="https://www.ivi.ru/info/agreement"
                 target="_blank">Пользовательским соглашением</a>
      </p>
    </div>
  )
}

export default PrivacyPolicy;
