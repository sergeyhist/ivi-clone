import { FC } from "react";
import styles from "./Options.module.sass";

const Options: FC = () => {
  return (
    <div className={styles.options}>
      <div className={styles.option}>
        <p className={styles.option__title}>Языки</p>
        <p className={styles.option__values}>Русский, Французский</p>
      </div>
      <div className={styles.option}>
        <p className={styles.option__title}>Субтитры</p>
        <p className={styles.option__values}>Русский</p>
      </div>
      <div className={styles.option}>
        <span className={styles.option__title}>Изображение и звук.</span>{" "}
        <span className={styles.option__text}>
          Фактическое качество зависит от устройства и ограничений правообладателя.
        </span>
      </div>
      <div className={styles.option}>
        <span className={styles.option__badge}>4К</span>
        <span className={styles.option__badge}>FullHD</span>
        <span className={styles.option__badge}>HD</span>
        <span className={styles.option__badge}>1080</span>
        <span className={styles.option__badge}>720</span>
        <span className={styles.option__badge}>5.1</span>
      </div>
    </div>
  );
};

export default Options;
