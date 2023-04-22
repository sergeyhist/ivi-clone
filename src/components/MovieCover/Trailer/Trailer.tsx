import { FC } from "react";
import styles from "./Trailer.module.sass";
import Image from "next/image";
import CustomButton from "/src/UI/CustomButton/CustomButton";

const Trailer: FC = () => {
  return (
    <>
      <div className={styles.trailer}>
        <Image src="/images/trailer1.jpeg" className={styles.trailer__img} width={858} height={483} alt="trailer-img" />
        <div className={styles.trailer__over}>
          <button className={styles.trailer__player}>
            <i className={styles.trailer__icon}></i>
            Развернуть трейлер
          </button>
          <div className={styles.trailer__center}>
            <CustomButton className={styles.button} type="red">
              <div className={styles.button__content}>
                <p className={styles.button__title}>Смотреть</p>
                <p className={styles.button__subtitle}>по подписке Иви</p>
              </div>
            </CustomButton>
            <p className={styles.trailer__text}>Первые 30 дней подписки за 1 ₽</p>
          </div>
          <p className={styles.trailer__age}></p>
        </div>
      </div>
    </>
  );
};

export default Trailer;
